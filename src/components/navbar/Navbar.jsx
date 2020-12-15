import React from "react";
import { Link } from "react-router-dom";

import { BsFillPersonFill } from "react-icons/bs";

import "./styles.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `0.5rem calc((100vw - 1000px) / 2)`,
    // height: "11vh",
    fontFamily: "Lato",
  },
  buttons: {
    marginRight: theme.spacing(1),
    fontFamily: "Lato",
  },
  title: {
    flexGrow: 1,
  },
  colorText: {
    color: "#17C1CB",
  },
  logo: {
    width: " 2vw",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div id="navbar" className={classes.root}>
      <AppBar
        className={classes.appbar}
        elevation={0}
        position="fixed"
        color="primary"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <IconButton>
              <img
                className={classes.logo}
                src={process.env.PUBLIC_URL + "/assets/img/LOGOKENZIEHUB1.png"}
                alt=""
              />
              <Link to="/">
                Dev <span className={classes.colorText}>Net</span>
              </Link>
            </IconButton>
          </Typography>

          <Typography color="inherit" className={classes.buttons}>
            <Link to="/">Home</Link>
          </Typography>

          <Typography className={classes.buttons}>
            <Link to="/login">Login</Link>
          </Typography>

          <Typography className={classes.buttons}>
            <Link to="/cadastro">Cadastro</Link>
          </Typography>

          <Typography className={classes.buttons}>
            <Link to="/usuario">Área do usuário</Link>
          </Typography>

          <Typography className={classes.buttons}>
            <Link to="/usuarios">Usuários</Link>
          </Typography>

          <Typography className={classes.buttons}>
            <IconButton color="inherit">
              <Link to="/meu-perfil">
                <BsFillPersonFill />
              </Link>
            </IconButton>
          </Typography>

          {/*  */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
