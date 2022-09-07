import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleDictionatyResponse(response) {
    setResult(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data);
  }
  function handleSubmit(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionatyResponse);

    //documentation: https://www.pexels.com/api/documentation/#authorization
    let pexelsApiKey =
      "563492ad6f91700001000001fad823e515b64ac2b496f68498c35bf4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?page=2&per_page=9&query=${keyword}`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  return (
    <div className="Dictionary">
      <h2 className="text-center fw-bold mt-3">D I C T I O N A R Y</h2>
      <section>
        <h3 className="text-center my-3 fw-bold">
          What word do you want to look up?
        </h3>
        <form className="mb-5" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                autoComplete="off"
                placeholder="Enter a word..."
                className="form-control"
                onChange={handleKeywordChange}
              />
            </div>
            <div className="col">
              <input
                type="submit"
                value="🔎"
                className="btn submit-btn px-5 shadow-sm"
              />
            </div>
          </div>
        </form>
      </section>
      <Results data={result} />
      <Photos photos={photos} />
    </div>
  );
}
