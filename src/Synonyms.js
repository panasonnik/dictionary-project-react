import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data.length > 0) {
    return (
      <div className="Synonyms">
        <div className="row">
          {props.data.map(function (synonym, index) {
            console.log(synonym);
            return (
              <div key={index} className="col-auto synonym-word">
                {synonym}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
