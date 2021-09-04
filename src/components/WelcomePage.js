import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  buttonStyle: {
    width: 200,
    height: 80,
    padding: 20,
    margin: 20,
    borderRadius: 3,
    border: 0,
  },
});

function WelcomePage() {
  const classes = useStyles();
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  return (

      <div className="container">
        <div className="centered">
          <Button
            onClick={() => handleClick("searchByCity")}
            classes={{
              root: classes.buttonStyle,
            }}
            variant="contained"
            color="primary"
          >
            SEARCH BY CITY
          </Button>

          <Button
            onClick={() => handleClick("searchByCountry")}
            classes={{
              root: classes.buttonStyle,
            }}
            variant="contained"
            color="primary"
          >
            SEARCH BY COUNTRY
          </Button>
        </div>
    </div>
  );
}

export default WelcomePage;
