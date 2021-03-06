import * as React from "react";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Header from "./Header";
import useStyles from "./styles";
import Loading from "./Loading";
import MoviesCard from "./MoviesCard";

export default function App({ isOfficeInitialized }) {
  const classes = useStyles();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchMovies = async () => {
    setLoading(true);
    setMovies([]);
    const resp = await fetch("http://localhost:8080/imdb");
    const imdbTopMovies = await resp.json();

    setMovies(imdbTopMovies);
    console.log(imdbTopMovies);
    setLoading(false);
  };

  const handleResetMovies = () => {
    setMovies([]);
  };

  if (!isOfficeInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <Header fetchMovies={handleFetchMovies} resetMovies={handleResetMovies} />
      <section className={classes.container}>
        <Loading loading={loading} />
        <MoviesCard movies={movies} />
      </section>
    </div>
  );
}
