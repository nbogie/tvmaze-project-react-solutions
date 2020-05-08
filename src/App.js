import React from 'react';

import './App.css';

import EpisodesData from './EpisodesData.json';


function App() {
  return (
    <div className="App">
      <Header />
      <EpisodeList episodes={EpisodesData} />
      <Footer />
    </div>
  );
}


function Header() {
  return (<header>Level 100 Sample Solution - React</header>);
}


function EpisodeList(props) {
  return (
    <div className="episode-list">
      {props.episodes.map((episode) => <Episode key={episode.id} episode={episode} />)}
    </div>
  )
}

function Episode(props) {
  return (
    <div className="card">
      <h1>{props.episode.name} - {makeEpisodeCode(props.episode)}</h1>
      <img src={props.episode.image.medium} alt="screengrab of episode" />
      <p>{props.episode.summary}</p>
    </div>
  );
}
//The above assumes all episodes have images (not true for ALL shows).



function Footer() {
  return (
    <footer>
      Credits: Episode data is originally
      from the fantastic <a href="https://tvmaze.com/">TVmaze</a> via
      their <a href="https://www.tvmaze.com/api">API</a>.
    </footer>
  )
}


//==== NOT components - some utility functions ================================

//return an episode code to represent the given episode, e.g. "S01E03"
function makeEpisodeCode(episode) {
  return `S${pad(episode.season)}E${pad(episode.number)}`;
}

//pad a number out to be an (at least) 2-digit string
//e.g. pad(3) -> "03"
function pad(num) {
  return num.toString().padStart(2, "0");
}


export default App;
