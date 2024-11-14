import React, { useRef, useState } from "react";

function AudioBg() {
  const [isPlaying, setIsPlaying] = useState(true); // Track if the audio is playing
  const audioRef = useRef(null); // Reference to the audio element

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the audio if it's playing
      } else {
        audioRef.current.play(); // Play the audio if it's paused
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };

  return (
    <div className="audio">
      <img
        className="musiclogo"
        src="/music.png"
        alt="Music Logo"
        style={{ animationPlayState: isPlaying ? "running" : "paused" }}
      />
      <audio ref={audioRef} src="/bsb.mp3" autoPlay loop />
      <button className="audiobtn" onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default AudioBg;
