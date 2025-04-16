import { createContext, useState } from "react";
import data from "../data/data";
import usePopularMovies from "../components/CustomHook";

export const context = createContext();

export const Datos = ({ children }) => {
  const { movies, setMovies } = usePopularMovies(data);
  const [favoritos, setFavoritos] = useState([]);

  return (
    <context.Provider value={{ movies, setMovies, favoritos, setFavoritos }}>
      {children}
    </context.Provider>
  );
};
