import React, { useState, useEffect } from "react";

import Header from './Header.js';
import Footer from './Footer.js';
import SearchableEpisodeList from './SearchableEpisodeList';
import StaticEpisodesData from './EpisodesData.json';

import './App.css';


function App() {

  //you can turn this off during development to save data
  const useLiveData = true;

  //STATE HOOK: the fetched episodes - initially none
  const [episodes, setEpisodes] = useState([]);

  //STATE HOOK: boolean - is the data loading or not?
  const [loading, setLoading] = useState(false);

  //EFFECT HOOK: Fetch episodes from API on component mount, only.
  useEffect(() => {
    if (useLiveData) {
      fetchEpisodesForShow(179);
    } else {
      pretendToFetchEpisodes();
    }
  }, []); //Note: IMPORTANT don't forget [] as last param so 
  //      that useEffect does not execute on any state change
  //      (INCLUDING the one it instigates)



  async function fetchEpisodesForShow(showId) {
    setLoading(true);
    console.log("Fetching data for real...");
    const result = await fetch(`https://api.tvmaze.com/shows/${showId}/episodes`);
    //Note: we should handle errors here
    const json = await result.json();
    setEpisodes(json);
    setLoading(false);
  };


  async function pretendToFetchEpisodes() {
    console.log("Using static fake data");
    setLoading(true);
    //Artificially delay to let devs see the loading screen
    await delay(2000);
    setEpisodes(StaticEpisodesData);
    setLoading(false);
  };


  return (

    <div className="App">

      <Header />

      {
        loading ?
          <div className="loading">Loading episodes...</div>
          :
          <SearchableEpisodeList episodes={episodes} />
      }

      <Footer />

    </div>
  );
}

async function delay(timeInMillis) {
  //ignore this
  return (new Promise((a, b) => setTimeout(a, timeInMillis)));
}


export default App;
