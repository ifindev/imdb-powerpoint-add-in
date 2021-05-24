import * as React from "react";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./Header";
import useStyles from "./styles";

export default function App() {
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

  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}
