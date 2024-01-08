"use client";
import { MovieProvider } from "@/contexts/MovieContext";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

export default function Home() {
  return (
    // Utiliza o MovieProvider para envolver a aplicação com o contexto
    <MovieProvider>
      <div className="w-screen h-screen p-3">
        <Header />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
