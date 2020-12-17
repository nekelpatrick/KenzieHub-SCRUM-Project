import React from "react";
// import { RiArrowDownSLine } from "react-icons/ri";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, Typography, Container } from "@material-ui/core";
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
  const token = useSelector((state) => state.userToken);

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
          Dev Net é uma rede de desenvolvedores focada em Networking. Aqui você
          poderá mostrar a todos suas habilidades, conhecimentos e até
          compartilhar seus projetos. Não perca tempo, cadastre-se já!
        </h3>
      </Typography>

      {!token && (
        <Typography
          className={classes.goto}
          onClick={() => history.push("/cadastro")}
        >
          <Typography className={classes.texto} variant="button">
            <span>Cadastre-se</span>
          </Typography>
          <RiArrowRightSLine className={classes.arrow} />
        </Typography>
      )}
    </div>
  );
};

export default Home;
