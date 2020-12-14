import React from "react";
// import { RiArrowDownSLine } from "react-icons/ri";

import { useEffect, useState } from "react";

// import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";

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
    color: "#2170EA",
    fontSize: "4rem",
  },
  colorText: {
    color: "#17C1CB",
  },
  goDown: {
    color: "#3af588",
    fontSize: "3rem",
  },
  desc: {
    color: "#fff",
    width: "30vw",
    textAlign: "center",
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
        <h1 className={classes.title}>
          Kenzie<span className={classes.colorText}>Hub</span>
        </h1>
      </Collapse>

      <h3 className={classes.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus.
      </h3>
    </div>
  );
};

export default Home;
