import { MovieProvider } from "./MovieContext";

export default function Home() {
  return (
    // Utiliza o MovieProvider para envolver a aplicação com o contexto
    <MovieProvider>
      <div>
        <h1>Minha Lista de Filmes</h1>
        <MovieList />
      </div>
    </MovieProvider>
  );
}
