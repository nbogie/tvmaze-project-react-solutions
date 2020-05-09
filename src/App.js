import React, { useState } from "react";

import Header from './Header.js';
import Footer from './Footer.js';
import EpisodeListFetched from './EpisodeListFetched';
import AllShowsData from './ShowsData.json'

import './App.css';

function App() {

  const [selectedShow, setSelectedShow] = useState(getDefaultShow());

  function getDefaultShow() {
    const idealShow = AllShowsData.find(show => show.id === 169);
    return idealShow ? idealShow : AllShowsData[0];
  }

  function handleShowSelected(id) {
    const foundShow = AllShowsData.find(show => show.id === Number(id));
    if (foundShow) {
      setSelectedShow(foundShow);
    }
  }

  return (

    <div className="App" >

      <Header />

      <div className="showHeading">
        <div className="showTitleTop">{selectedShow.name}</div>

        {/*Show selector*/}
        <select
          className="control"
          onChange={event => handleShowSelected(event.target.value)}
          value={selectedShow.id} >
          {
            //create the options within the select
            sortedShowsByName(AllShowsData).map(show =>
              <option
                key={show.id}
                value={show.id}>
                {show.name}
              </option>)
          }
        </select>
      </div>



      <EpisodeListFetched showId={selectedShow.id} />

      <Footer />

    </div>
  );
}


function sortByRating(shows) {
  shows.sort((a, b) => b.rating.average - a.rating.average);
  return shows;
}


function sortedShowsByName(shows) {
  //Assumes all shows have a string name.
  //make a copy so we don't mutate given list
  return [...shows].sort((a, b) => a.name.localeCompare(b.name));
}


export default App;
