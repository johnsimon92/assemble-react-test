import "./NowPlayingMovie.css";

import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface NowPlayingMovieProps {
  id: number;
  posterPath: string;
  title: string;
  voteAverage: number;
}

export const NowPlayingMovie: FC<NowPlayingMovieProps> = ({
  id,
  posterPath,
  title,
  voteAverage,
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`movie/${id}`);
  };

  return (
    <div className="movie-container" role="presentation" onClick={onClick}>
      <img
        className="movie-poster"
        alt={title}
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
      />
      <div className="movie-title">{title}</div>
      <div>{voteAverage}</div>
    </div>
  );
};
