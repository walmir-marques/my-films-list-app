// MovieList.js
import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  // Obtém o estado global do contexto
  const { state } = useContext(MovieContext);

  return (
    <div>
      <h2>Filmes</h2>
      <ul>
        {state.movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <h2>Favoritos</h2>
      <ul>
        {state.favorites.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
