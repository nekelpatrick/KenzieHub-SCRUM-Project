import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Typography,
  Container,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
import { RiImageEditLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginTop: "10vh",
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
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
  },
}));

export default function UserProfile() {
  const classes = useStyles();

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
    new_password: yup
      .string()
      .min(6, "Mínimo de 6 caractéres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})/,
        "Senha deve conter ao menos um caracter especial"
      ),
    contact: yup.string().required("Campo Necessário"),
    bio: yup.string().required("Campo Necessário"),
    image: yup.mixed(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [user, setUser] = useState({});
  const [course_module, setCourse_madule] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  useEffect(() => {
    axios
      .get("https://kenziehub.me/users/8b8e50a6-50c2-4718-b817-2d38cad0c8f4")
      .then((res) => setUser(res.data));
  }, []);
  console.log(user);

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

  const handleForm = (data) => {
    data.course_module = course_module;
    console.log(data);
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
              ref={register}
              name="image"
              id="image"
              style={{ display: "none" }}
              type="file"
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
                value={course_module}
                onChange={handleChange}
                id="course_module"
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
                name="new_password"
                error={!!errors.new_password}
                helperText={errors.new_password?.message}
                style={{ margin: 8 }}
                fullWidth
                type="password"
                variant="outlined"
              />
            </Container>
            <Container className={classes.buttons}>
              <Button type="submit" variant="contained" color="secondary">
                DELETAR CONTA
              </Button>
              <Button type="submit" variant="contained" color="primary">
                SALVAR ALTERAÇÕES
              </Button>
            </Container>
          </form>
        </Container>
      )}
    </>
  );
}
