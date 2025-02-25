import React, { useState, useRef } from "react";

//Import Styles
import "./styles/app.scss";

//Util
import data from "./util";

//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

function App() {
  //Ref
  const audioRef = useRef(null);

  //State

  const [songs, setSongs] = useState(data());
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentSong, setCurrentSong] = useState(songs[0]);

  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
