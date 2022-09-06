import React from "react";
import Synonyms from "./Synonyms";
import Header from "./Header";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <Header data={props.data} />

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <p className="part-of-speech fw-bold">{meaning.partOfSpeech}</p>
                {meaning.definitions.map(function (definition, index) {
                  if (index < 5) {
                    return (
                      <div key={index} className="definition-example">
                        <p className="definition"> {definition.definition}</p>
                        <p className="definition example mb-3">
                          {definition.example}
                        </p>

                        <Synonyms data={definition.synonyms} />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
