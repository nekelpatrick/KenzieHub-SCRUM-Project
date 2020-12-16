import React, { useState } from "react";

import { MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";

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
  const [ techLevel, setTechLevel ] = useState('Iniciante')

  const token = useSelector((state) => (state.userToken))

  const handleForm = (data) => {
    data.status = techLevel
    axios
      .post("https://kenziehub.me/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((err) => { setError(err); console.log(err) })
  };

  const status = [
    {
      value: "Iniciante",
      label: "Iniciante",
    },
    {
      value: "Intermediario",
      label: "Intermediario",
    },
    {
      value: "Avançado",
      label: "Avançado",
    }
  ];

  const handleChange = (event) => {
    setTechLevel(event.target.value)
  }

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
                label="Título de sua tech"
                autoFocus
                fullWidth
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="status"
                id="status"
                variant="outlined"
                fullWidth
                select
                autoFocus
                fullWidth
                value={ techLevel }
                onChange={ handleChange }
                inputRef={ register }
              >
                {status.map((level, index) => (
                  <MenuItem key={ index } value={ level.value }>
                    {level.label}
                  </MenuItem>
                ))}
              </TextField>
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
