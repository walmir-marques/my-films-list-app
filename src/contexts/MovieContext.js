import { createContext, useEffect, useReducer } from "react";
import movieReducer from "@/reducers/MovieReducer";

// Cria o estado inicial da context, um objeto com um array de filmes e um array de favoritos
const initialState = {
  movies: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], //Recupera favoritos da localStorage ou retorna vazio se nao tiver favoritos
};

export const MovieContext = createContext(); //Cria um context

//Criando um provider
export const MovierProvider = ({ children }) => {
  //criando reducer para gerenciar o estado global da aplicaçao
  const [state, dispatch] = useReducer(movieReducer, initialState);

  //criando um effect para fazer a chamada da api
  useEffect(() => {
    fetch("https://api.movies.com")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_MOVIES", payload: data }));
  }, []);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
