import React from "react";
import useStyles from "./styles";

const Header = ({ fetchMoviesHandle, resetMoviesHandle }) => {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
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
