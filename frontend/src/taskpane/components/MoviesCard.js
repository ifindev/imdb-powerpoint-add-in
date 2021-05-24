import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function MoviesCard({ movies }) {
  const classes = useStyles();
  return (
    <>
      {movies !== [] && (
        <Grid container spacing={2}>
          {/* eslint-disable-next-line */}
          {movies.map((movie) => {
            if (movie.title !== "" && movie.description !== "" && movie.poster !== "")
              return (
                <Grid item key={movie.title} xs={6} sm={4}>
                  <Card style={{ height: "630px", width: "168px" }}>
                    <img src={movie.poster} alt={movie.title} />
                    <CardContent>
                      <h3 style={{ wordWrap: "break-word" }}>{movie.title}</h3>
                      <p>
                        <strong>rating: {movie.rating}</strong>
                      </p>

                      <Typography variant="body2" color="textSecondary" style={{ fontSize: "13px" }}>
                        {movie.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
          })}
        </Grid>
      )}
    </>
  );
}

export default MoviesCard;
