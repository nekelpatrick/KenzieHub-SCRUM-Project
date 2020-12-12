import React from "react";

import { useState } from "react";

import UserCard from "../../components/user-area-card/Card";
import AddNewCard from "../../components/user-area-addNew/AddNewCard";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "1%",
    marginTop: "3%",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const UserArea = () => {
  const classes = useStyles();

  const addNew = () => {
    return <AddNewCard />;
  };

  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<UserCard key={inputList.length} />));
  };

  return (
    <div>
      <Grid className={classes.root} container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <UserCard />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <UserCard />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <UserCard />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AddNewCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserArea;
