import "./Header.css";

import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSearchMovies } from "@/api";

export const Header: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { data = [], isLoading } = useSearchMovies(searchQuery);

  const onType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onSearch = () => {
    if (!data.length) return;
    onSelectResult(data[0].id)();
  };

  const onSelectResult = (id: number) => () => {
    navigate(`movie/${id}`);
    setSearchQuery("");
  };

  const renderDropdown = () => {
    if (!data.length && searchQuery && !isLoading) {
      return <div className="dropdown">No results</div>;
    }
    if (!data.length && !isLoading) {
      return null;
    }
    return (
      <ul className="dropdown">
        {data.map(({ id, title }) => {
          return (
            <li
              key={id}
              className="dropdown-result"
              role="presentation"
              onClick={onSelectResult(id)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="header">
      <Link className="movies-link" to="/">
        MOVIES
      </Link>
      <div>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search movie..."
            value={searchQuery}
            onChange={onType}
          ></input>
          <button className="search-btn" onClick={onSearch}>
            Search
          </button>
        </div>
        {renderDropdown()}
      </div>
    </div>
  );
};
