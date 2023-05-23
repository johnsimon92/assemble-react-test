import "./home.css";

import React from "react";

import { useNowPlaying } from "@/api";
import { NowPlayingMovie } from "@/components/NowPlayingMovie";

const Homepage = () => {
  const { data = [] } = useNowPlaying();

  console.log(data);
  return (
    <div>
      <h1 className="featured-today" data-testid="title">
        Featured today
      </h1>
      <div className="movie-list">
        {data.map(({ id, poster_path, title, vote_average }) => (
          <NowPlayingMovie
            key={id}
            id={id}
            posterPath={poster_path}
            title={title}
            voteAverage={vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
