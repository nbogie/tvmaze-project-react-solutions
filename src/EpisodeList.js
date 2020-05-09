import React from 'react';
import Episode from './Episode';


function EpisodeList(props) {
    return (
        <div className="episode-list">
            {
                props.episodes.map((episode) =>
                    <Episode
                        key={episode.id}
                        episode={episode}
                        isAlone={props.episodes.length === 1}
                    />)
            }
        </div>
    )
}


export default EpisodeList;
