import React from 'react';
import Episode from './Episode';


function EpisodeList(props) {
    return (
        <div className="episode-list">
            {props.episodes.map((episode) => <Episode key={episode.id} episode={episode} />)}
        </div>
    )
}


export default EpisodeList;
