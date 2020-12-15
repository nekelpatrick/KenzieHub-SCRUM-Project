import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import { getUserThunk, updateUserThunk } from "../../store/modules/user/thunk";

import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Typography,
  Container,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { RiImageEditLine } from "react-icons/ri";

// METERIAL-UI RELATED
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginTop: 80,
  },
  avatar: {
    backgroundColor: "#C4C4C4",
    width: 100,
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 5,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "left",
    flex: "1 0 12%",
    textAlign: "right",
  },
  buttons: {
    display: "flex",
    maxWidth: 250,
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
  messages: {
    marginTop: 30,
    marginBottom: 30,
    width: 250,
  },
}));

export default function UserProfile() {
  // GLOBAL VARIABLES
  const classes = useStyles();
  let image = false;
  // const token = window.localStorage.getItem("token") || Cookies.get("token");

  // GLOBAL STATES
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.userToken);
  useEffect(() => {
    setWillChangePassword(false);
  }, [user]);

  // LOCAL STATES
  const [willChangePassword, setWillChangePassword] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");
  const [course_module, setCourse_madule] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(getUserThunk(token));
  }, []);

  // VALIDATION WITH YUP
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo Necessário")
      .matches(/[A-Za-z]\s[A-Za-z]/, "Formato Inválido"),
    email: yup
      .string()
      .required("Campo Necessário")
      .email("Formato de email Inválido"),
    old_password: yup
      .string()
      .min(6, "Mínimo de 6 caractéres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})/,
        "Senha deve conter ao menos um caracter especial"
      ),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caractéres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})/,
        "Senha deve conter ao menos um caracter especial"
      ),
    contact: yup.string().required("Campo Necessário"),
    bio: yup.string().required("Campo Necessário"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // UPADATE MESSAGE
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // COURSE_MODULES HANDLERS
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

  // GET AVATAR HANDLER
  const handleAvatarChange = (e) => {
    image = new FormData();
    image.append("avatar", e.target.files[0]);
  };

  // FORM HANDLER
  const handleForm = (data) => {
    data.course_module = course_module;
    data.image = image;
    dispatch(updateUserThunk(data, token, setUpdateMessage));
    setOpen(true);
  };

  return (
    <>
      {user.id && (
        <Container maxWidth="md" className={classes.root}>
          <form onSubmit={handleSubmit(handleForm)}>
            <Avatar
              src={user.avatar_url}
              aria-label={user.name}
              className={classes.avatar}
            >
              {user.name[0]}
            </Avatar>
            <label htmlFor="image">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <RiImageEditLine
                  style={{ fontSize: "1.7rem" }}
                ></RiImageEditLine>
              </IconButton>
            </label>
            <input
              name="image"
              id="image"
              style={{ display: "none" }}
              type="file"
              onChange={handleAvatarChange}
            />
            <Container maxWidth="md" className={classes.textContainer}>
              <Typography className={classes.text} variant="body1">
                ID:
              </Typography>
              <TextField
                id="userId"
                style={{ margin: 8 }}
                defaultValue={user.id}
                fullWidth
                variant="outlined"
                disabled
              />
            </Container>
            <Container maxWidth="md" className={classes.textContainer}>
              <Typography className={classes.text} variant="body1">
                Name:
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                name="name"
                inputRef={register}
                error={!!errors.name}
                helperText={errors.name?.message}
                style={{ margin: 8 }}
                defaultValue={user.name}
              />
            </Container>
            <Container maxWidth="md" className={classes.textContainer}>
              <Typography className={classes.text} variant="body1">
                Email:
              </Typography>
              <TextField
                inputRef={register}
                name="email"
                style={{ margin: 8 }}
                defaultValue={user.email}
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                variant="outlined"
              />
            </Container>
            <Container maxWidth="md" className={classes.textContainer}>
              <Typography className={classes.text} variant="body1">
                Módulo:
              </Typography>
              <TextField
                inputRef={register}
                variant="outlined"
                fullWidth
                select
                style={{ margin: 8, textAlign: "left" }}
                value={course_module ? course_module : user.course_module}
                onChange={handleChange}
                name="course_module"
              >
                {modules.map((module, index) => (
                  <MenuItem key={index} value={module.value}>
                    {module.label}
                  </MenuItem>
                ))}
              </TextField>
            </Container>
            <Container maxWidth="md" className={classes.textContainer}>
              <Typography className={classes.text} variant="body1">
                Bio:
              </Typography>
              <TextField
                inputRef={register}
                name="bio"
                id="bio"
                error={!!errors.bio}
                helperText={errors.bio?.message}
                style={{ margin: 8 }}
                defaultValue={user.bio}
                fullWidth
                variant="outlined"
              />
            </Container>
            <Container maxWidth="md" className={classes.textContainer}>
              <Typography className={classes.text} variant="body1">
                Contato:
              </Typography>
              <TextField
                inputRef={register}
                name="contact"
                id="contact"
                error={!!errors.contact}
                helperText={errors.contact?.message}
                style={{ margin: 8 }}
                defaultValue={user.contact}
                fullWidth
                variant="outlined"
              />
            </Container>
            {willChangePassword && (
              <>
                <Container maxWidth="md" className={classes.textContainer}>
                  <Typography className={classes.text} variant="body1">
                    Senha Antiga:
                  </Typography>
                  <TextField
                    inputRef={register}
                    name="old_password"
                    error={!!errors.old_password}
                    helperText={errors.old_password?.message}
                    style={{ margin: 8 }}
                    fullWidth
                    type="password"
                    variant="outlined"
                  />
                </Container>
                <Container maxWidth="md" className={classes.textContainer}>
                  <Typography className={classes.text} variant="body1">
                    Nova Senha:
                  </Typography>
                  <TextField
                    inputRef={register}
                    name="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    style={{ margin: 8 }}
                    fullWidth
                    type="password"
                    variant="outlined"
                  />
                </Container>
              </>
            )}
            <Container className={classes.buttons}>
              <Button
                onClick={() => setWillChangePassword(!willChangePassword)}
                variant="contained"
                style={{ marginBottom: "30px" }}
              >
                {willChangePassword ? "MANTER SENHA" : "ALTERAR SENHA"}
              </Button>
              <Button type="submit" variant="contained" color="primary">
                SALVAR ALTERAÇÕES
              </Button>
            </Container>
          </form>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert
              className={classes.messages}
              severity={
                updateMessage === "Senha antiga incorreta."
                  ? "error"
                  : "success"
              }
            >
              {updateMessage}
            </Alert>
          </Snackbar>
        </Container>
      )}
    </>
  );
}
