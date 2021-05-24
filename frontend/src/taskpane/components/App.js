import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./Header";
import useStyles from "./styles";

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}
