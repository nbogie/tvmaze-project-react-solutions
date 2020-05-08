import React from "react";

import Header from './Header.js';
import EpisodeList from './EpisodeList.js';
import Footer from './Footer.js';

import EpisodesData from './EpisodesData.json';

import './App.css';


function App() {

  return (

    <div className="App">
      <Header />


      <EpisodeList episodes={EpisodesData} />
      <Footer />
    </div>
  );
}


export default App;
