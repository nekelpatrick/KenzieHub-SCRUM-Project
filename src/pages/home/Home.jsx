import React from "react";
// import { RiArrowDownSLine } from "react-icons/ri";

import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

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
  text: {
    color: "#fff",
    width: "30vw",
    textAlign: "left",
    marginTop: "4%",
    ["@media (max-width:700px)"]: {
      fontSize: "16px",
      width: "60vw",
      marginTop: "10%",
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
    display: "flex",
    alignItems: "center",
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
    fontSize: 45,
    color: "rgb(255, 255, 255)",
    transition: "1000ms ease-in-out",
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
  const history = useHistory();

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
        <h1 className={classes.desc}>
          Conheca os devs da Kenzie e suas competências.
        </h1>
        <p className={classes.text}>
          Na dev net você consegue acessar uma série perfils de desenvolvedores
          que estudam na Kenzie Academy Brasil, descubrir quais tecnologias eles
          já conhecem e até acessar projetos feitos por eles. Além disso você
          podera fazer o mesmo! Aqui você consiguirá compartilhar as tecnologias
          que você conhece e os trabalhos que você já fez com uma comunidade
          super ativa muito interessada em ver o que você tem para mostrar!
        </p>
      </Typography>

      {/* <Box className={classes.gotoBox}>
        <Link className={classes.goto} to="/cadastro">
          <span className={classes.linker}>Cadastre-se</span>
          <HiOutlineArrowNarrowRight className={classes.arrow} />
        </Link>
      </Box> */}

      <Typography
        className={classes.goto}
        onClick={() => history.push("/cadastro")}
      >
        <Typography className={classes.texto} variant="button">
          <span>Cadastre-se</span>
        </Typography>
        <RiArrowRightSLine className={classes.arrow} />
      </Typography>

      {/* <Link to="/cadastro" className={classes.goto}>
        <Button variant="outlined" color="primary" className={classes.button}>
          <IconButton className={classes.IconButton}>
            <RiArrowRightSLine className={classes.arrow} />
          </IconButton>
          <Typography className={classes.texto} variant="button">
            <span>Cadastre-se</span>
          </Typography>
        </Button>
      </Link> */}
    </div>
  );
};

export default Home;
