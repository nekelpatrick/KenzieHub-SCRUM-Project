import React from "react";

import { useState } from "react";

import UserCard from "../../components/user-area-card/Card";
import AddNewCard from "../../components/user-area-addNew/AddNewCard";

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

  const [inputCards, setInputCards] = useState([]);

  const [selector, setSelector] = useState(0);

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

          <Grid item xs={12} sm={6} md={4}>
            <AddNewCard inputCards={inputCards} setInputCards={setInputCards} />
          </Grid>
        </Grid>
      ) : (
        <h1>Techs</h1>
      )}
    </div>
  );
};

export default UserArea;
