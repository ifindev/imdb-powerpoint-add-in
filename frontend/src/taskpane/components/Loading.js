import React from "react";
import useStyles from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ loading }) => {
  const classes = useStyles();
  return (
    <>
      {loading && (
        <div className={classes.loading}>
          <CircularProgress />
          <p>Please wait. We're scraping IMDB now...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
