import React, { useContext } from "react";
import { context } from "../contexto/Context";

const FindedFav = ({ favoritos }) => {
  return (
    <>
      <div
        style={{
          fontSize: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          marginTop: "60px",
        }}
      >
        <h3>Tus peliculas favoritas</h3>
        <select name="" id="" className="inputFiltro">
          <option value="">Selecciona una opción</option>
          <option value="">Alfábetico</option>
          <option value="">Agregado</option>
        </select>
      </div>
      <section className="favsection">
        <div className="favMovies">
          {favoritos.map((movie) => (
            <div key={movie.title} className="allfavmovies">
              <img
                src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                alt=""
              />
              <h3>{movie.title} </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const NoFavs = () => {
  return (
    <div
      style={{
        fontSize: "2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 40px",
        marginTop: "60px",
      }}
    >
      <h3>No hay peliculas favoritas</h3>
      <select name="" id="" className="inputFiltro">
        <option value="">Selecciona una opción</option>
        <option value="">Alfábetico</option>
        <option value="">Agregado</option>
      </select>
    </div>
  );
};

const Favoritos = () => {
  const { favoritos } = useContext(context);

  return (
    <>
      {favoritos.length > 0 ? <FindedFav favoritos={favoritos} /> : <NoFavs />}
    </>
  );
};

export default Favoritos;
