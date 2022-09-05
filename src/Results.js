import React from "react";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h3>{props.data.word}</h3>
        <p className="phonetic">{props.data.phonetic}</p>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <p className="part-of-speech">
                <em>{meaning.partOfSpeech}</em>
              </p>
              <p className="definition mb-5">
                {meaning.definitions[0].definition}
              </p>
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
