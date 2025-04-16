import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { context } from "../contexto/Context.jsx";
const Movies = () => {
  const { movies } = useContext(context);
  return (
    <>
      <h3
        style={{
          fontSize: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        Peliculas populares
      </h3>
      <section className="showMovies">
        <div className="separadores">
          {movies.map((movie) => (
            <div className="allmovies" key={movie.title}>
              <NavLink to={`/peliculas/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                  alt=""
                />
                <h3 className="title">{movie.title} </h3>
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Movies;
