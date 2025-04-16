import React, { useEffect, useState } from "react";

const usePopularMovies = (datas) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(datas)
      .then((data) => data.json())
      .then((datas) => setMovies(datas.results));
  }, [datas]);
  return { movies, setMovies };
};

export default usePopularMovies;
