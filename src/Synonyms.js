import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data.length > 0) {
    return (
      <div className="Synonyms">
        <p>
          <strong>Synonyms:</strong>
        </p>
        {props.data.map(function (synonym, index) {
          console.log(synonym);
          return <div key={index}>{synonym}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
