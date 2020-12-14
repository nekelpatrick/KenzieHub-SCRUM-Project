import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { IconButton, Button } from "@material-ui/core";

import { MdLibraryAdd } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    marginTop: "10%",
    maxWidth: 300,
    padding: "20px",
  },
  buttonAdd: {
    color: "#316bd6",
  },
}));

export default function OutlinedCard({ inputFields, setInputFields }) {
  const classes = useStyles();

  console.log(inputFields);
  const handleAddCard = () => {
    setInputFields([...inputFields, { projectName: "", desc: "", url: "" }]);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardActions>
        <Button onClick={() => handleAddCard()}>
          <IconButton className={classes.buttonAdd} size="medium">
            <MdLibraryAdd />
          </IconButton>
          Adicionar Novo projeto
        </Button>
      </CardActions>
    </Card>
  );
}
