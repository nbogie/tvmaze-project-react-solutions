import React, { useState, useEffect } from "react";
import { pluralize } from './EpisodeUtils';
import TVShow from './TVShow.js';

import "./TVShowsList.css";


function matches(inspectStr, targetStr) {
    return -1 !== inspectStr.toLowerCase().indexOf(targetStr.toLowerCase());
}

function tvShowMatchesQuery(show, query) {
    return (
        matches(show.name, query) ||
        show.genres.some(genre => matches(genre, query))
        //|| matches(show.summary, query)
    );
}
function TVShowsList(props) {
    const allShows = props.shows;

    //HOOKS:

    //STATE HOOK: filtered shows (filtered from data)
    const [filteredShows, setFilteredShows] = useState(allShows);

    //STATE HOOK: query from text input box
    const [query, setQuery] = useState("");

    //EFFECT HOOK:
    //updates filteredShows by filtering data with query,
    //runs whenever the query is changed (each keystroke)
    //or indeed when the data itself is changed (fetched new data)
    useEffect(() => {
        setFilteredShows(
            allShows.filter(show => tvShowMatchesQuery(show, query))
        );
    }, [query, allShows]);

    return (
        <div className="TVShowList">
            <div id="controlPanel">

                <span className="control">Filtering for </span>

                <input
                    id="searchInput"
                    className="control"
                    type="text"
                    placeholder="search for a show or genre"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />

                <div className="control" id="filterSummary">
                    Found {filteredShows.length} {pluralize("show", filteredShows.length)}
                </div>
            </div>

            <div>
                <ul className="show-list">
                    {filteredShows.map(item => (
                        <TVShow
                            show={item}
                            key={item.id}
                            onTVShowSelected={props.handleTVShowSelected} />
                    ))}
                </ul>
            </div>

        </div>
    );
}



export default TVShowsList;
