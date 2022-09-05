import React from "react";

export default function Header(props) {
  let audioUrl = null;

  props.data.phonetics.map(function (phonetics) {
    audioUrl = phonetics.audio;
    return null;
  });

  let audio = new Audio(audioUrl);
  function playSound() {
    audio.play();
  }
  return (
    <div className="Header">
      <div className="d-flex">
        <button onClick={playSound} className="play-btn me-3">
          <i class="fa-solid fa-volume-high"></i>
        </button>
        <h3>{props.data.word}</h3>
      </div>
    </div>
  );
}
