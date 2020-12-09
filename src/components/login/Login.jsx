import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        KenzieHub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const history = useHistory();

  const confirmation = yup.object().shape({
    email: yup.string().required("Campo Obrigatório"),

    password: yup.string().required("Campo Obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(confirmation),
  });

  const isRemember = (evt) => {
    return evt.target.checked;
  };

  const handleForm = (user) => {
    axios
      .post("https://kenziehub.me/sessions", user)
      .then((res) => {
        isRemember
          ? Cookies.set("token", res.data.token, { expires: 2 })
          : window.localStorage.setItem("token", res.data.token);

        history.push("/usuarios");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      {Cookies.get("token") && history.push("/usuários")}
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>

        <Typography component="h1" variant="h5">
          Entrar
        </Typography>

        <form
          className={classes.form}
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de e-mail"
            name="email"
            inputRef={register}
            autoFocus
          />

          <p style={{ color: "red" }}>{errors.email?.message}</p>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            inputRef={register}
          />

          <p style={{ color: "red" }}>{errors.password?.message}</p>

          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                onChange={isRemember}
              />
            }
            label="Mantenha-me conectado"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2">
                {"Não possuí uma conta?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}