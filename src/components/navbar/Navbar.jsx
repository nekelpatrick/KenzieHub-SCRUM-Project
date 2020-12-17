import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// ----------REACT ICONS -------------

import { BsFillPersonFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import {
  AiFillHome,
  AiOutlineUserAdd,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";

import { FaHubspot, FaUsers } from "react-icons/fa";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
//=--------------

import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { setTokenThunk } from "../../store/modules/token/thunk";

import Cookies from "js-cookie";

// ----------MATERIAL UI IMPORTS-----------------------------
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
//
import {
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItem,
  Divider,
  List,
  CssBaseline,
  Drawer,
} from "@material-ui/core/";

//------------------

const drawerWidth = 240;

//

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `0.5rem calc((100vw - 1000px) / 2)`,
    fontFamily: "Lato",
    display: "block",
  },
  buttons: {
    marginRight: theme.spacing(1),
    fontFamily: "Lato",
    textDecoration: "none",
    color: "#f2f2f2",
    padding: "14px 16px",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
  colorText: {
    color: "#17C1CB",
    textDecoration: "none",
  },
  logo: {
    width: " 2vw",
    textDecoration: "none",
  },

  // MOBILE -------------------------------//

  //------------DRAWER MOBILE --//
  mobileRoot: {
    flexGrow: 1,
    paddingLeft: "10px",

    display: "flex",
  },
  mobileToolbar: {
    "& .makeStyles-content": { padding: "0" },
    padding: "0",
  },
  mobileMenuButton: {
    marginRight: theme.spacing(2),
  },
  mobileTitle: {
    flexGrow: 1,
  },

  mobileLogo: {
    width: "10vw",
  },
  mobileAppBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mobileAppBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  linkDrawer: {
    "& a": {
      padding: "1px 1px",
    },
  },

  //
}));

const Navbar = () => {
  let history = useHistory();

  const pushHome = () => {
    history.push("/");
  };

  const pushCadastro = () => {
    history.push("/cadastro");
  };

  const pushLogin = () => {
    history.push("/login");
  };

  const pushMeuPerfil = () => {
    history.push("/meu-perfil");
  };
  const pushUsuario = () => {
    history.push("/usuario");
  };
  const pushUsuarios = () => {
    history.push("/usuarios");
  };

  const classes = useStyles();
  //
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();

  const logOut = () => {
    Cookies.remove("token");
    window.localStorage.removeItem("token");
    dispatch(setTokenThunk(""));
  };
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:600px)");

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      {!matches ? (
        <div id="navbar" className={classes.mobileRoot}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.mobileAppBar, {
              [classes.mobileAppBarShift]: open,
            })}
          >
            <Toolbar className={classes.mobileToolbar}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <FiMenu />
              </IconButton>
              <Typography variant="h6" noWrap className={classes.title}>
                <IconButton>
                  <img
                    className={classes.mobileLogo}
                    src={
                      process.env.PUBLIC_URL + "/assets/img/LOGOKENZIEHUB1.png"
                    }
                    alt=""
                  />
                  <Link to="/">
                    Dev <span className={classes.colorText}>Net</span>
                  </Link>
                </IconButton>
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <MdKeyboardArrowLeft />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {!token ? (
                <>
                  <ListItem button onClick={pushHome}>
                    <ListItemIcon>
                      <AiFillHome color="rgba(0,0,102,0.8)" />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItem>

                  <ListItem button onClick={pushCadastro}>
                    <ListItemIcon>
                      <AiOutlineUserAdd color="rgba(0,0,102,0.8)" />
                    </ListItemIcon>
                    <ListItemText primary={"Cadastrar"} />
                  </ListItem>

                  <ListItem button onClick={pushLogin}>
                    <ListItemIcon>
                      <AiOutlineLogin color="#20aa8c" />
                    </ListItemIcon>
                    <ListItemText primary={"Login"} />
                  </ListItem>
                </>
              ) : (
                <>
                  <ListItem button onClick={() => logOut()}>
                    <ListItemIcon>
                      <AiOutlineLogout color="red" />
                    </ListItemIcon>
                    <ListItemText primary={"Log out"} />
                  </ListItem>

                  <ListItem button onClick={pushUsuario}>
                    <ListItemIcon>
                      <FaHubspot color="rgba(0,0,102,0.8)" />
                    </ListItemIcon>
                    <ListItemText primary={"Área do usuário"} />
                  </ListItem>

                  <ListItem button onClick={pushUsuarios}>
                    <ListItemIcon>
                      <FaUsers color="#0066cc" />
                    </ListItemIcon>
                    <ListItemText primary={"Usuários"} />
                  </ListItem>

                  <ListItem button onClick={pushMeuPerfil}>
                    <ListItemIcon>
                      <BsFillPersonFill color="#0066cc" />
                    </ListItemIcon>
                    <ListItemText primary={"Meu Perfil"} />
                  </ListItem>
                </>
              )}
            </List>
            <Divider />
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
          </main>{" "}
        </div>
      ) : (
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
                    src={
                      process.env.PUBLIC_URL + "/assets/img/LOGOKENZIEHUB1.png"
                    }
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

              {token ? (
                <>
                  <Typography
                    className={classes.buttons}
                    onClick={() => logOut()}
                  >
                    <Link to="/">Log Out</Link>
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
                </>
              ) : (
                <>
                  <Typography className={classes.buttons}>
                    <Link to="/cadastro">Cadastro</Link>
                  </Typography>
                  <Typography className={classes.buttons}>
                    <Link to="/login">Login</Link>
                  </Typography>
                </>
              )}
            </Toolbar>
          </AppBar>
        </div>
      )}
    </>
  );
};

export default Navbar;
