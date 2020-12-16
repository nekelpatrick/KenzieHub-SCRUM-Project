import React from "react";
// import { RiArrowDownSLine } from "react-icons/ri";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import {
  Collapse,
  Typography,
  Container,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import { RiArrowRightSLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url( ./assets/img/background3.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // ["@media (min-height:600px)"]: { marginTop: "-25%" },
    ["@media (max-width:700px)"]: { marginTop: "-28%" },
  },
  title: {
    textAlignt: "center",
    paddingTop: "16vh",
    color: "#f6fafb",
    fontSize: "4rem",
    fontFamily: "Open Sans",
  },
  colorText: {
    color: "#003cc9",
  },
  goDown: {
    color: "#3af588",
    fontSize: "3rem",
  },
  desc: {
    color: "#fff",
    width: "30vw",
    textAlign: "center",
    marginTop: "2%",
    ["@media (max-width:700px)"]: {
      fontSize: "16px",
      width: "60vw",
      marginTop: "8%",
    },
  },
  logo: {
    width: "10vw",
  },

  // gotoBox: {
  //   marginTop: "0vh",
  // },

  border: "solid 1px",
  goto: {
    color: "rgb(8, 41, 133)",
    height: "16",
    textDecoration: "none",
    padding: "20px",
    position: "relative",
  },

  button: {
    backgroundColor: "rgba(17, 104, 148, 0.075)",
    marginTop: "50%",

    "& .MuiButton-label": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    ["@media (max-width:700px)"]: { marginTop: "5%" },
  },
  IconButton: {
    borderRadius: "6%",
  },

  arrow: {
    width: "10vw",
    height: "10vh",
    color: "rgb(235, 237, 238)",
    padding: "10px",
    transition: "1000ms ease-in-out",
    textShadow: "10px 10px 10px 10px blue",

    "&:hover": {
      color: "rgb(84, 206, 236)",
    },
    ["@media (max-width:700px)"]: { width: "45vw", height: "11vh" },
  },

  texto: {
    fontWeight: "bold",
    color: "white",
    fontSize: "30px",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={50}
      >
        <Typography>
          <h1 className={classes.title}>
            Dev <span className={classes.colorText}>Net</span>
          </h1>
        </Typography>
      </Collapse>
      <Container elevation={3}>
        <img
          className={classes.logo}
          src={process.env.PUBLIC_URL + "/assets/img/LOGOKENZIEHUB1.png"}
          alt=""
        />
      </Container>

      <Typography>
        <h3 className={classes.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus.
        </h3>
      </Typography>

      {/* <Box className={classes.gotoBox}>
        <Link className={classes.goto} to="/cadastro">
          <span className={classes.linker}>Cadastre-se</span>
          <HiOutlineArrowNarrowRight className={classes.arrow} />
        </Link>
      </Box> */}

      <Link to="/cadastro" className={classes.goto}>
        <Button variant="outlined" color="primary" className={classes.button}>
          <IconButton className={classes.IconButton}>
            <RiArrowRightSLine className={classes.arrow} />
          </IconButton>
          <Typography className={classes.texto} variant="button">
            <span>Cadastre-se</span>
          </Typography>
        </Button>
      </Link>
    </div>
  );
};

export default Home;
