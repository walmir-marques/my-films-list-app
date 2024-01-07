const MovieReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "ADD_TO_FAVORITES":
      // Adiciona o filme aos favoritos e atualiza a localStorage
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    case "REMOVE_FROM_FAVORITES":
      // Remove o filme dos favoritos e atualiza a localStorage
      const filteredFavorites = state.favorites.filter(
        (movie) => movie.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      return { ...state, favorites: filteredFavorites };
    // Outros cases conforme necessário
    default:
      return state;
  }
};

export default movieReducer;
