import React from "react";

const Header = ({ fetchMoviesHandle, resetMoviesHandle }) => {
  return (
    <div>
      <header>
        <h1>Get Top IMDB Movies</h1>
        <div>
          <button onClick={fetchMoviesHandle} className={`${classes.button} ${classes.buttonPrimary}`}>
            Get Movie Lists
          </button>
          <button onClick={resetMoviesHandle} className={`${classes.button} ${classes.buttonDanger}`}>
            Clear Data
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
