import React from "react";
import { stripTags, imgSrcFor } from './EpisodeUtils.js';


function TVShow(props) {
    const show = props.show;

    return (
        <li key={show.id} className="show">
            <div onClick={() => props.onTVShowSelected(show)} >
                <h1>{show.name}</h1>
            </div>

            <div className="three-panels">
                <figure className="panel panel-one">
                    <img src={imgSrcFor(show)} alt={show.name} />
                </figure>
                <div className="panel panel-two">
                    {stripTags(show.summary)}
                </div>
                <div className="panel panel-three">
                    <p>
                        <span className="info-key">Rated:</span>{" "}
                        {show.rating && show.rating.average}
                    </p>
                    <p>
                        <span className="info-key">Genres: </span>
                        {show.genres && show.genres.join(" | ")}
                    </p>
                    <p>
                        <span className="info-key">Status:</span> {show.status}
                    </p>
                    <p>
                        <span className="info-key">Runtime:</span> {show.runtime}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default TVShow;
