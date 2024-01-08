// MovieContext.js
import { createContext, useEffect, useReducer } from "react";
import movieReducer from "@/reducers/MovieReducer";

// constantes com as urls da API e a key.
const API_KEY = "73f22a4f9c78cb869d603a62d977fcb5";
const MOVIE_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular";
const MOVIE_URL_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=";

const initialState = {
  movies: [], //Para os filmes populares ao iniciar a aplicacao
  favorites: [],
  searchResults: [], // Para os filmes que forem pesquisados pelo usuario
};

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    // Chama a API para obter os filmes populares ao montar o componente
    fetch(`${MOVIE_URL_POPULAR}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_MOVIES", payload: data }));
  }, []); // O array de dependências está vazio para chamar a API apenas uma vez

  //funçao responsavel por fazer a busca dos filmes na api, passando com parametro os valores digitados pelo usuario
  const searchMovies = async (searchTerm) => {
    try {
      const response = await fetch(
        `${MOVIE_URL_SEARCH}${API_KEY}&query=${searchTerm}`
      );
      const data = await response.json();
      dispatch({ type: "SEARCH_MOVIES", payload: data.results });
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  return (
    <MovieContext.Provider value={{ state, dispatch, searchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
