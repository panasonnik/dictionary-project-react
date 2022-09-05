import React from "react";

export default function Results(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Results">
        <h3>{props.data.word}</h3>
        <p>{props.data.phonetic}</p>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h4>
                <em>{meaning.partOfSpeech}</em>
              </h4>
              <p>{meaning.definitions[0].definition}</p>
              {/* {meaning.definitions.map(function (definition, index) {
                return (
                  <div key={index}>
                    <p>{definition.definition}</p>
                  </div>
                );
              })} */}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
