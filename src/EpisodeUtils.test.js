import { makeEpisodeCode, imgSrcFor, pluralize, stripTags, toHTTPS } from './EpisodeUtils';


//Docs for Expect library's "matchers":  https://jestjs.io/docs/en/expect.html#content

it('can make episode codes', () => {
    expect(makeEpisodeCode({ season: 1, number: 9 })).toEqual("S01E09");
    expect(makeEpisodeCode({ season: 10, number: 11 })).toEqual("S10E11");
    expect(makeEpisodeCode({ season: 78, number: 99 })).toEqual("S78E99");
    expect(makeEpisodeCode({ season: 1, number: 234 })).toEqual("S01E234");
});


it('can replace image when missing', () => {
    expect(imgSrcFor({ image: null })).toEqual("https://placekitten.com/300/200");
    expect(imgSrcFor({ image: null }, true)).toEqual("https://placekitten.com/600/402");
});


it('can choose correct sized image', () => {
    expect(
        imgSrcFor({ image: { medium: "http://example.com/someImage.png", original: "foo" } })
    ).toEqual("http://example.com/someImage.png");
    expect(
        imgSrcFor({ image: { original: "http://example.com/biggerImage.png", medium: "bar" } },
            true)
    ).toEqual("http://example.com/biggerImage.png");
});


it('can pluralise a regular word', () => {
    expect(pluralize("episode", 1)).toEqual("episode");
    expect(pluralize("episode", 7)).toEqual("episodes");
    expect(pluralize("episode", 0)).toEqual("episodes");
});


describe("toHTTPS", () => {
    it('can replace http with https in a url', () => {
        expect(toHTTPS("http://example.com/")).toEqual("https://example.com/");
    });

    it('should not touch https', () => {
        const orig = "https://example.com/ok.png";
        expect(toHTTPS(orig)).toEqual(orig);
    });

    it('should not replace "http" LATER in a url', () => {
        const orig = "https://example.com/http.png";
        expect(toHTTPS(orig)).toEqual(orig);
    });
});


it('can strip tags from a string', () => {
    expect(
        stripTags("<p>Arya makes progress in her training. Jon travels.</p><p><br><br></p>")
    ).toEqual("Arya makes progress in her training. Jon travels.");

    const input = "<p>Jaime encounters a hero; the High Sparrow fixates on another prey; Arya hatches a new plan; Yara and Theon plot their next move; Olenna and Cersei discuss their families' futures.</p><p></p><p>While Jaime weighs his options, Cersei answers a request. Tyrion's plans bear fruit. Arya faces a new test.</p>"

    const expected = "Jaime encounters a hero; the High Sparrow fixates on another prey; Arya hatches a new plan; Yara and Theon plot their next move; Olenna and Cersei discuss their families' futures.While Jaime weighs his options, Cersei answers a request. Tyrion's plans bear fruit. Arya faces a new test."

    expect(stripTags(input)).toEqual(expected);
});
