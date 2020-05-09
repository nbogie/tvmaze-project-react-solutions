import React, { useState } from "react";

import Header from './Header.js';
import Footer from './Footer.js';
import AllShowsData from './ShowsData.json'
import TVShowsList from './TVShowsList.js'
import './App.css';
import EpisodeListFetched from "./EpisodeListFetched.js";

function App() {

  const [selectedShow, setSelectedShow] = useState(null);

  return (

    <div className="App" >

      <Header />
      {selectedShow ?
        (<React.Fragment>
          <div className="showHeading">
            <h1 className="showTitleTop">{selectedShow.name}</h1>
            <button
              className="control"
              onClick={() => setSelectedShow(null)}>Back to shows listings
            </button>
          </div>

          <EpisodeListFetched showId={selectedShow.id} />
        </React.Fragment>
        )
        :
        <TVShowsList
          shows={AllShowsData}
          handleTVShowSelected={(show) => setSelectedShow(show)}
        />
      }

      <Footer />

    </div>
  );
}



export default App;
