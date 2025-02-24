import React, { useState } from "react";

//Import Styles
import "./styles/app.scss";

//Util
import data from "./util";

//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

function App() {
  //State

  const [songs, setSongs] = useState(data());
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs}/>
    </div>
  );
}

export default App;
