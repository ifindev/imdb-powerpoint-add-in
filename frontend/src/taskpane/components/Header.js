import React from "react";
import useStyles from "./styles";

const Header = ({ fetchMovies, resetMovies }) => {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <h1>Get Top IMDB Movies</h1>
        <div>
          <button onClick={fetchMovies} className={`${classes.button} ${classes.buttonPrimary}`}>
            Get Movie Lists
          </button>
          <button onClick={resetMovies} className={`${classes.button} ${classes.buttonDanger}`}>
            Clear Data
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
