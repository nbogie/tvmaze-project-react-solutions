import React from 'react';
import { makeEpisodeCode, stripTags, imgSrcFor } from './EpisodeUtils';


function Episode(props) {
    const isAlone = props.isAlone;

    return (
        <div className="card">
            <h1>{props.episode.name} - {makeEpisodeCode(props.episode)}</h1>
            <img
                className="episode"
                src={imgSrcFor(props.episode, isAlone)}
                alt="screengrab of episode"
            />
            <p>{stripTags(props.episode.summary)}</p>
        </div>
    );
}








export default Episode;
