import React from "react";

export default function Header(props) {
  let audioUrl = null;
  let transcript = null;

  props.data.phonetics.map(function (phonetics) {
    audioUrl = phonetics.audio;
    transcript = phonetics.text;
    return null;
  });

  let audio = new Audio(audioUrl);
  function playSound() {
    audio.play();
  }
  return (
    <div className="Header">
      <section>
        <div className="row">
          <div className="col-1">
            <button onClick={playSound} className="play-btn me-3">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </div>
          <div className="col-3">
            <h3>{props.data.word}</h3>
            <p>{transcript}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
