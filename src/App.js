import React, { useState } from "react";

//Import Styles
import './styles/app.scss';

//Util
import data from './util';

//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";

function App() {

  //State

  const [songs, setSongs] = useState(data())

  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player />
    </div>
  );
}

export default App;
