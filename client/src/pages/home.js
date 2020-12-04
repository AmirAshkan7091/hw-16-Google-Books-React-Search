import React, { useState } from "react";
import axios from "axios";

import "../../src/style.css";
import Books from "../components/books";
import Navigation from "../components/nav";

const formatBooks = books =>
  books.map(
    ({
      id,
      volumeInfo: {
        imageLinks: { thumbnail }
      },
      volumeInfo
    }) => {
      return {
        googleID: id,
        thumbnail,
        ...volumeInfo
      };
    }
  );

function Home() {
  const [books, updateBooks] = useState([]);
  const [searchCriteria, updateCriteria] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .get("/api/search", {
        params: {
          q: searchCriteria
        }
      })
      .then(({ data }) => {
        const formattedBooks = formatBooks(data);
        updateBooks(formattedBooks);
      });
  };

  return (
    <div>
      <Navigation />

      <div className="jumbotron jumbotron-fluid">
        <div className="container">

          <p className="lead sub-title-hp">
            Searching My Favorite Books
          </p>
        </div>
      </div>
      <form onSubmit={e => handleSubmit(e)} className="hp-form">
        <div className="form-group">
          <input
            placeholder="Search for books here"
            type="input"
            className="user-input"
            id="input"
            aria-describedby="emailHelp"
            value={searchCriteria}
            onChange={e => updateCriteria(e.target.value)}
          />
          <button type="submit" className="submit-button" role="submit">
            Search
          </button>
        </div>
      </form>
      {books && <Books books={books} location="home" />}
    </div>
  );
}

export default Home;
