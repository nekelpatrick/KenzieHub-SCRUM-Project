import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "90%", 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const TechsForm = () => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const [ error, setError ] = useState({})

  const token = Cookies.get("token");

  const handleForm = (data) => {
    axios
      .post("https://kenziehub.me/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((err) => {setError(err); console.log(err)})
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(handleForm)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="title"
                id="title"
                autoComplete="title"
                variant="outlined"
                required
                label="Título do trabalho"
                autoFocus
                fullWidth
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="status"
                id="status"
                autoComplete="description"
                variant="outlined"
                required
                label="Seu nivel nesta tech"
                fullWidth
                inputRef={register}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default TechsForm;
