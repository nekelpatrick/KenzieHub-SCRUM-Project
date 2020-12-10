import React, { useState } from "react";

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
import MenuItem from "@material-ui/core/MenuItem";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();

  const history = useHistory();

  const scheme = yup.object().shape({
    name: yup
      .string()
      .required("Campo Necessário")
      .matches(/[A-Za-z]\s[A-Za-z]/, "Formato Inválido"),
    email: yup
      .string()
      .required("Campo Necessário")
      .email("Formato de email Inválido"),
    password: yup
      .string()
      .required("Campo Necessário")
      .min(6, "Mínimo de 6 caractéres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})/,
        "Senha deve conter ao menos um caracter especial"
      ),
    contact: yup.string().required("Campo Necessário"),
    bio: yup.string().required("Campo Necessário"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(scheme),
  });

  const handleForm = (data) => {
    data.course_module = course_module;
    console.log(data);

    axios
      .post("https://kenziehub.me/users", data)
      .then(() => history.push("/login"))
      .catch((res) => {
        if (res.response) {
          setEmailError("Email já cadastrado");
        }
      });
  };

  const [emailError, setEmailError] = useState("");

  const [course_module, setCourse_madule] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  const handleChange = (evt) => {
    setCourse_madule(evt.target.value);
  };

  const modules = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
      label: "Primeiro módulo (Introdução ao Frontend)",
    },
    {
      value: "Segundo módulo (Frontend Avançado)",
      label: "Segundo módulo (Frontend Avançado)",
    },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
      label: "Terceiro módulo (Introdução ao Backend)",
    },
    {
      value: "Quarto módulo (Backend Avançado)",
      label: "Quarto módulo (Backend Avançado)",
    },
  ];

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(handleForm)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={errors.name}
                helperText={errors.name?.message}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Seu nome"
                autoFocus
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={errors.email || emailError}
                helperText={errors.email?.message || emailError}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Endereço de e-mail"
                name="email"
                autoComplete="email"
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={errors.password}
                helperText={errors.password?.message}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={errors.contact}
                helperText={errors.contact?.message}
                variant="outlined"
                required
                fullWidth
                id="contact"
                label="Seu Linkedin"
                name="contact"
                autoComplete="contact"
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                select
                value={course_module}
                onChange={handleChange}
                id="course_module"
                label="Módulo atual"
                name="course_module"
                autoComplete="course_module"
              >
                {modules.map((module, index) => (
                  <MenuItem key={index} value={module.value}>
                    {module.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid className="bio" item xs={12}>
              <TextField
                error={errors.bio}
                helperText={errors.bio?.message}
                variant="outlined"
                required
                fullWidth
                id="bio"
                multiline
                rows={5}
                label="Fale um pouco sobre você"
                name="bio"
                autoComplete="bio"
                inputRef={register}
              />
              <p>{errors.bio?.message}</p>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Eu concordo em receber e-mails sobre promoções da KenzieHub "
              />
            </Grid>
          </Grid>

          {/* QUANDO FOR FAZER ALGO COM O FORMULÁRIO, USAR O ONSUBMIT */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Você já tem uma conta? Fazer Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
