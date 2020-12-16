import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const JobsForm = () => {
  const classes = useStyles();

  const token = useSelector((state) => state.userToken);
  console.log(token);

  const confirmartion = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    deploy_url: yup.string().required("Campo Obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(confirmartion),
  });

  const handleForm = (data) => {
    console.log(data);
    axios
      .post("https://kenziehub.me/users/works", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res));
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
                error={errors.title}
                helperText={errors.title?.message}
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
                error={errors.description}
                helperText={errors.title?.message}
                name="description"
                id="description"
                autoComplete="description"
                variant="outlined"
                required
                label="Descrição do trabalho"
                fullWidth
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={errors.deploy_url}
                helperText={errors.deploy_url?.message}
                name="deploy_url"
                id="deploy_url"
                autoComplete="deploy_url"
                variant="outlined"
                required
                label="URL de entrega"
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

export default JobsForm;
