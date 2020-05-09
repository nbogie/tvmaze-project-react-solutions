//Notes: This is not a simple example from which to learn 
// how to work with a select form element.

//TODO: Investigate how to have episode selector clear the search box
//      by changing query without re-triggering an effect.
// user picks one episode:
//   we want to setFilteredEpisodes to array of one episode
//   we want to set query to ""
//   but setting query to "" will normally setFilteredEpisodes to allEpisodes!

import React, { useState, useEffect } from 'react';
import EpisodeList from './EpisodeList.js';
import { makeEpisodeCode } from './EpisodeUtils';

function SearchableEpisodeList(props) {

    const allEpisodes = props.episodes;

    //Explanation of main episode-search flow:
    //==========================================
    //Either: 
    //1. user types into search box 
    //2. the registered event handler calls setQuery
    //3. setQuery changes query
    //4. the useEffect hook notices query changed,
    //5. and calls setFilteredEpisodes
    //6. setFilteredEpisodes changes filteredEpisodes
    //7. the change to filteredEpisodes causes a re-render of dependent parts of the DOM...
    //     ...including which episodes are shown 
    //     ...AND which episodes are listed in the select box.

    //Or: 
    //1. User selects an episode from the select drop-down
    //2. the registered event handler is triggered
    //3. and in turn calls setFilteredEpisodes([oneEpisode])
    //...same as step 6 and onward, above

    //A STATE hook: Helps maintain a search query string (from text input box)
    const [query, setQuery] = useState("");

    //A STATE hook: Helps maintain a list of filtered episodes
    //Starts with all episodes
    const [filteredEpisodes, setFilteredEpisodes] = useState(allEpisodes);

    //An EFFECT hook:
    //Updates filteredEpisodes by filtering data by the query,
    //This runs whenever the search query is changed (each keystroke) (and on mount)
    //(It would also run if the main episodes list were to change.)
    useEffect(() => {
        const matches = findEpisodesMatching(query, allEpisodes);
        setFilteredEpisodes(matches);
    }, [query, allEpisodes]);


    function handleEpisodeSelected(id) {
        const foundEpisode = allEpisodes.find(episode => episode.id === Number(id));
        if (foundEpisode) {
            setFilteredEpisodes([foundEpisode]);
        }
    }

    return (
        <div>
            <div id="controlPanel">

                <span className="control">Filtering for </span>

                <input
                    id="searchInput"
                    className="control"
                    type="text"
                    placeholder="search within episodes..."
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />

                <div id="filterSummary" className="control">
                    found {filteredEpisodes.length} {pluralize("episode", filteredEpisodes.length)}
                </div>

                {/* either show the select input OR a "show all" button */}
                {
                    filteredEpisodes.length > 1 ?

                        <select
                            className="control"
                            onChange={event => handleEpisodeSelected(event.target.value)}
                            value={filteredEpisodes.length === 1 ? filteredEpisodes[0].id : ""} >

                            {
                                //create the options within the select
                                filteredEpisodes.map(episode =>
                                    <option
                                        key={episode.id}
                                        value={episode.id}>
                                        {makeEpisodeCode(episode) + " - " + episode.name}
                                    </option>)
                            }

                        </select>

                        :

                        <button
                            className="control"
                            onClick={() => setFilteredEpisodes(allEpisodes)}>
                            Show all episodes
                          </button>
                }
            </div>

            <EpisodeList episodes={filteredEpisodes} />
        </div>
    )
}

/*=============================================================================
  ============== Pure javascript "utility" functions - no React here ==========
  ===========================================================================*/

//Return the list of episodes which match the given query
function findEpisodesMatching(query, episodes) {
    return episodes.filter(episode => episodeMatchesQuery(episode, query));
}

//Return true if episode's name or summary 
//contains the given query string (case-insensitive)
//An episode is ALWAYS considered to contain the empty string ""
function episodeMatchesQuery(episode, query) {
    return (
        !query ||
        contains(episode.name, query) ||
        contains(episode.summary, query)
    );
}

//Return true if string a contains string b, case-insensitive.  Else false.
//Will return false if either a or b are falsy (e.g. empty strings)
function contains(a, b) {
    return (
        a && b &&
        a.toLowerCase().indexOf(b.toLowerCase()) !== -1
    );
}

function pluralize(word, number) {
    return number === 1 ? word : word + "s"
}

export default SearchableEpisodeList;