import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((themes) => ({
  root: {
    padding: "0px",
    margin: "0px",
  },
  container: {
    width: "80%",
    margin: "50px auto",
  },

  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 10px 30px 10px",
    backgroundColor: "#2196f3",
    color: "#ffffff",
  },

  button: {
    margin: "0px 5px",
    padding: "8px",
    borderWidth: "0px",
    backgroundColor: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },

  buttonPrimary: {
    color: "white",
    backgroundColor: "#283593",
    "&:hover": {
      backgroundColor: "#1a237e",
      color: "white",
    },
  },

  buttonDanger: {
    color: "white",
    backgroundColor: "#d81b60",
    "&:hover": {
      backgroundColor: "#880e4f",
    },
  },

  loading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
