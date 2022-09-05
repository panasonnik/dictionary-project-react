import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [result, setResult] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResult(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <form className="mt-5" onSubmit={handleSubmit}>
        <input
          type="search"
          autoComplete="off"
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" />
      </form>
      <Results data={result} />
    </div>
  );
}
