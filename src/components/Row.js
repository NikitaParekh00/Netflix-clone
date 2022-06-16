import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

export const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const request = await axios.get(fetchURL);
    // console.log(request);
    // return request
    setMovies(request.data.results);
  }

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((el) => (
          <img
            key={el.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${isLargeRow ? el.poster_path : el.backdrop_path}`}
            alt={el.name}
          />
        ))}
      </div>
    </div>
  );
};
