import React, { useContext } from "react";
import { MovieContext } from "@/contexts/MovieContext";
import Image from "next/image";

const MovieList = () => {
  const { state } = useContext(MovieContext);

  // Verifica se há algo digitado na pesquisa
  const isSearchActive = state.searchResults.length > 0;

  // Decide quais filmes exibir com base no estado da pesquisa
  const moviesToDisplay = isSearchActive ? state.searchResults : state.movies;

  return (
    <div className="flex flex-wrap p-4">
      {moviesToDisplay.map((movie) => (
        <div
          className="flex w-full p-4 justify-between text-center mb-3 rounded-md border border-blue-700 shadow-2xl"
          key={movie.id}
        >
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} image`}
              width={80}
              height={130}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center w-56 text-center">
            <p className="text-sm font-semibold mb-5 text-white">
              {movie.original_title}
            </p>
            <p className="text-yellow-500 text-sm">⭐️ {movie.vote_average}</p>
          </div>
          <div className="w-64">
            <p className="max-h-32 overflow-scroll text-xs text-white">
              {movie.overview}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
