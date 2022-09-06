import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      <div className="row">
        {props.data.map(function (synonym, index) {
          return (
            <div key={index} className="col-auto synonym-word">
              {synonym}
            </div>
          );
        })}
      </div>
    </div>
  );
}
