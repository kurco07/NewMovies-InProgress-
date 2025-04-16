import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navegar = useNavigate();

  const goFav = () => {
    navegar("/favoritos");
  };

  return (
    <section className="main">
      <div className="container">
        <aside className="aside">
          Free movies to watch and enjoy!{" "}
          <span>Watch all the movies available until today</span>
          <button onClick={goFav}>VER FAVORITOS</button>
        </aside>
      </div>
    </section>
  );
};

export default Home;
