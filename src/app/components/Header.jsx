// Header.js
import React, { useState, useContext, useEffect } from "react";
import { MovieContext } from "@/contexts/MovieContext";

const Header = () => {
  const { searchMovies } = useContext(MovieContext);
  //criado um State para armazenar os valores do input
  const [searchTerm, setSearchTerm] = useState("");

  //funçao que seta o valor do input no State conforme uma tecla é digitada
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  useEffect(() => {
    // Chama a função de busca sempre que o valor de searchTerm for alterado
    searchMovies(searchTerm);
  }, [searchMovies, searchTerm]);

  return (
    <div className="flex items-center w-screen p-3">
      <h1 className="text-center text-white flex-1">Minha Lista de Filmes</h1>
      <input
        type="text"
        placeholder="Pesquisar Filme ... "
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-blue-500 rounded-md p-1 text-xs bg-white text-black mr-7"
      />
    </div>
  );
};

export default Header;
