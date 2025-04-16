import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../contexto/Context";

const MoviesInfo = () => {
  const { id } = useParams();
  const { movies, setFavoritos, favoritos } = useContext(context);

  if (!movies || movies.length === 0) {
    return <div style={{ color: "black" }}> Cargando peliculas...</div>;
  }
  const finded = movies.find((datos) => datos.id === Number(id));

  const agregarFav = () => {
    const noAdd = favoritos.find((fav) => fav.id === finded.id);

    if (noAdd) {
      return;
    }
    {
      const newFavoritos = [...favoritos];
      setFavoritos([...newFavoritos, finded]);
    }
  };

  const FindedmOvies = () => {
    return (
      <>
        <div className="findedMovies">
          <aside>
            <img
              src={`https://image.tmdb.org/t/p/w154${finded.poster_path}`}
              alt=""
            />
            <button onClick={agregarFav}>AGREGAR</button>
          </aside>
          <section>
            <h3 className="titulo">
              {finded.title}{" "}
              <span className="overview">({finded.release_date})</span>
            </h3>
            <p className="overview"> {finded.original_title}</p>
            <p className="overview">
              <span className="overview-span">Votos:</span>{" "}
              {finded.vote_average}
            </p>
            <p className="overview">
              <span className="overview-span">Descripción:</span>{" "}
              {finded.overview}
            </p>

            <p className="overview">
              <span className="overview-span">Genero:</span> {finded.genre_ids}
            </p>
          </section>
        </div>
      </>
    );
  };

  const NoResults = () => {
    return (
      <>
        <h2>No se encontro pelicula</h2>
      </>
    );
  };

  return (
    <section
      className="showMovies"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w1280${finded.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {finded ? <FindedmOvies /> : <NoResults />}
    </section>
  );
};

export default MoviesInfo;
