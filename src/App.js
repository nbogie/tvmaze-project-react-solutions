import React from "react";

import Header from './Header.js';
import Footer from './Footer.js';
import SearchableEpisodeList from './SearchableEpisodeList';

import AllEpisodesData from './EpisodesData.json';

import './App.css';


function App() {
  return (

    <div className="App">

      <Header />

      <SearchableEpisodeList episodes={AllEpisodesData} />

      <Footer />

    </div>
  );
}



export default App;
