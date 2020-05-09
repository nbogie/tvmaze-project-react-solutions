import React, { useState } from "react";

import Header from './Header.js';
import Footer from './Footer.js';
import AllShowsData from './ShowsData.json'
import TVShowsList from './TVShowsList.js'
import './App.css';
import EpisodeListFetched from "./EpisodeListFetched.js";

function App() {

  function getDefaultShow() {
    const idealShow = AllShowsData.find(show => show.id === 169);
    return idealShow ? idealShow : AllShowsData[0];
  }



  const [selectedShow, setSelectedShow] = useState(getDefaultShow());

  return (

    <div className="App" >

      <Header />
      {selectedShow ?
        (<React.Fragment>
          <div className="showHeading">
            <h1 className="showTitleTop">{selectedShow.name}</h1>
            <button className="control" onClick={() => setSelectedShow(null)}>Back to shows listings</button>
          </div>

          <EpisodeListFetched showId={selectedShow.id} />
        </React.Fragment>
        )
        :
        <TVShowsList shows={AllShowsData} handleTVShowSelected={(show) => setSelectedShow(show)} />
      }

      <Footer />

    </div>
  );
}



export default App;
