import React, { useRef, useState } from "react";

function AudioBg() {
  const [isPlaying, setIsPlaying] = useState(false); // Set initial state to paused
  const audioRef = useRef(null); // Reference to the audio element
  const videoRef = useRef(null); // Reference to the video element

  const togglePlay = () => {
    if (audioRef.current && videoRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the audio if it's playing
        videoRef.current.pause(); // Pause the video if it's playing
      } else {
        audioRef.current.play(); // Play the audio if it's paused
        videoRef.current.play(); // Play the video if it's paused
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };

  return (
    <div className="audio">
      <video
        ref={videoRef}
        className="musiclogo"
        src="/sound.mp4"
        muted
        loop
        playsInline
      />
      <audio ref={audioRef} src="/bsb.mp3" loop />
      <button className="audiobtn" onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default AudioBg;
