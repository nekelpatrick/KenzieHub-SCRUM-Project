import React from "react";
import { Link } from "react-router-dom";

import { BsFillPersonFill } from "react-icons/bs";

import "./styles.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div id="navbar" className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            KenzieHub
          </Typography>

          <Button color="inherit">
            <Link to="/">Home</Link>
          </Button>

          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>

          <Button color="inherit">
            <Link to="/cadastro">Cadastro</Link>
          </Button>

          <Button color="inherit">
            <Link to="/usuario">Área do usuário</Link>
          </Button>

          <Button color="inherit">
            <Link to="/usuarios">Usuários</Link>
          </Button>

          <Button color="inherit">
            <Link to="/sobre-nos">Sobre nós</Link>
          </Button>

          <IconButton color="inherit">
            <Link to="/meu-perfil">
              <BsFillPersonFill />
            </Link>
          </IconButton>

          {/*  */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;