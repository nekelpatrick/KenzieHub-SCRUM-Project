import React from "react";
// import { RiArrowDownSLine } from "react-icons/ri";

import { useEffect, useState } from "react";

// import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url( ./assets/img/background3.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlignt: "center",
    paddingTop: "20vh",
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
  },
  logo: {
    width: "10vw",
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
    </div>
  );
};

export default Home;
