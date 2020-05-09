//return an episode code to represent the given episode, e.g. "S01E03"
function makeEpisodeCode(episode) {
    return `S${pad(episode.season)}E${pad(episode.number)}`;
}

//pad a number out to be an (at least) 2-digit string
//e.g. pad(3) -> "03"
function pad(num) {
    return num.toString().padStart(2, "0");
}


function imgSrcFor(episodeOrShow, isAlone = false) {
    return isAlone ?
        episodeOrShow.image ? episodeOrShow.image.original : "https://placekitten.com/600/402" :
        episodeOrShow.image ? episodeOrShow.image.medium : "https://placekitten.com/300/200";
}


//Remove tags by replacing any matching occurrences with an empty string.
//This function uses a regular expression.  
//It is NOT required you understand regular expressions for the course.
function stripTags(str) {
    if (!str) {
        return str;
    }
    //Components of the regex:
    //
    // <       a literal <
    // \/ ?    a literal /  (zero or one occurrences)
    // [a-z]+  a sequence of at least one alphabet character (see flags)
    // >       a literal >
    // gi      global and case-insensitive "flags"
    //
    //Further regex breakdown at https://regexr.com/532tm
    return str.replace(/<\/?[a-z]+>/gi, "");
}


function pluralize(word, number) {
    return number === 1 ? word : word + "s"
}
export { makeEpisodeCode, stripTags, imgSrcFor, pluralize };
