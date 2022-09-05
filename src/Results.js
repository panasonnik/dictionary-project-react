import React from "react";
import Synonyms from "./Synonyms";
import Header from "./Header";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <Header data={props.data} />
        <p>{props.data.phonetic}</p>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <p className="part-of-speech">
                <em>{meaning.partOfSpeech}</em>
              </p>
              {meaning.definitions.map(function (definition, index) {
                if (index < 5) {
                  return (
                    <div key={index}>
                      <p className="definition mb-5">{definition.definition}</p>
                      <p className="definition mb-5 fw-bold">
                        {definition.example}
                      </p>
                      <Synonyms data={definition.synonyms} />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
