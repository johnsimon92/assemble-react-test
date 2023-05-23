import "./movie_detail.css";

import React from "react";
import { useParams } from "react-router-dom";

import { useMovieDetail } from "@/api";

const MovieDetail = () => {
  const { id } = useParams();
  const { data } = useMovieDetail({ id });

  if (!data) {
    return <div>Error!</div>;
  }

  const {
    overview,
    poster_path,
    production_companies,
    release_date,
    title,
    vote_average,
  } = data;
  return (
    <div className="movie-detail">
      <img
        className="poster"
        alt={title}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
      />
      <div className="movie-info">
        <h1 className="title">{title}</h1>
        <div className="rating">{vote_average}</div>
        <div className="description">{overview}</div>
        <div className="data">Release: {release_date}</div>
        <div className="data">
          Producers: {production_companies.map(({ name }) => name).join(", ")}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
