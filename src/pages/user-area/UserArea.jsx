import React from "react";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getUserThunk } from "../../store/modules/user/thunk";

import UserCard from "../../components/user-area-card/Card";
import TechCard from "../../components/tech-card/TechCard";
import Button from "@material-ui/core/Button";

import { Grid, Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: "1%",
    marginTop: "3%",
    paddingLeft: "30px",
    paddingRight: "30px",
    padding: theme.spacing(1),
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const UserArea = () => {
  const classes = useStyles();

  const token = useSelector((state) => state.userToken);
  const user = useSelector((state) => state.user);

  const [inputCards, setInputCards] = useState([]);
  const [techs, setTechs] = useState(user.techs || []);

  const [selector, setSelector] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk(token));
  }, [techs]);

  const history = useHistory();

  const handleChange = (event, newValue) => {
    setSelector(newValue);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          value={selector}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Seus Projetos" />
          <Tab label="Suas Techs" />
        </Tabs>
      </Paper>

      {selector === 0 ? (
        <>
          <Grid className={classes.root} container spacing={1}>
            {inputCards.map((inputCard, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <UserCard
                  inputCards={inputCards}
                  setInputCards={setInputCards}
                  index={index}
                  inputCard={inputCard}
                />
              </Grid>
            ))}
          </Grid>
          <Button
            type="submit"
            size="medium"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => history.push("/newjob")}
          >
            Adicione novo trabalho
          </Button>
        </>
      ) : (
        <>
          <Grid className={classes.root} container spacing={1}>
            {user.techs &&
              user.techs.map((tech, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <TechCard prevTechs={techs} setTechs={setTechs} tech={tech} />
                </Grid>
              ))}
          </Grid>
          <Button
            type="submit"
            size="medium"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => history.push("/newtech")}
          >
            Adicione nova tecnologia
          </Button>
        </>
      )}
    </div>
  );
};

export default UserArea;
