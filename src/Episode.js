import React from 'react';
import { makeEpisodeCode } from './EpisodeUtils';


function Episode(props) {
    return (
        <div className="card">
            <h1>{props.episode.name} - {makeEpisodeCode(props.episode)}</h1>
            <img src={imgSrcFor(props.episode)} alt="screengrab of episode" />
            <p>{stripTags(props.episode.summary)}</p>
        </div>
    );
}


function imgSrcFor(episode) {
    return episode.image ? episode.image.medium : "https://placekitten.com/300/200";
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


export default Episode;
