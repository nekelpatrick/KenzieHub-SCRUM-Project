import React from "react";

import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  IconButton,
  Button,
  FormControl,
  TextField,
  CardContent,
  CardActions,
  Card,
} from "@material-ui/core";
import axios from "axios";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 350,
    marginTop: "10%",
    maxWidth: 400,
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  editButton: {
    color: "#3666eb",
    width: "2vw",
  },
  deleteButton: {
    color: "#f33636",
    width: "2vw",
  },
  saveButtonOuter: {
    "& .MuiIconButton-root:hover": {
      color: "#2fb822",
    },
  },
  saveButton: {
    color: "#9ebcec",
  },
  textField: {
    "& .MuiInputBase-root": {
      // width: "13.5vw",
      padding: "20px",
    },
    "& .MuiFormLabel-root": {
      fontSize: "14px",
    },
  },
  buttons: {
    padding: "1px",
    justifyContent: "center",
  },
}));

export default function TechCard({
  inputTechCards,
  setInputTechCards,
  inputTechCard,
  index,
}) {
  const classes = useStyles();

    // console.log(inputTechCards)
    // console.log(inputTechCard)
    // console.log(index)

  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(true);

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const enableEdit = () => {
    setEdit(false);
  };

  const disableEdit = () => {
    setEdit(true);
  };

  const handleChangeInput = (index, event) => {
    // console.log(index, event.target.name);
    // const values = [...inputTechCards];
    console.log(event)
    const data = event.target.value;
    console.log(data)
    // console.log(inputTechCards);
    // values[index][event.target.name] = event.target.value;
    // setInputTechCards(values);
  };

  const handleRemoveCard = (index) => {
    console.log(inputTechCard.id)
    // const values = [...inputTechCards];
    // values.splice(index, 1);
    // setInputTechCards(values);
    axios
        .delete("https://kenziehub.me/users/techs/" + inputTechCard.id)
        .then((res) => console.log(res))
        .catch(err => console.log(err))
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <form className={classes.form} noValidate autoComplete="off">
          {/*  */}
          <div>
            <TextField
              name="title"
              className={classes.textField}
              disabled={edit}
              id="outlined-multiline-flexible"
              label="Nome do Projeto "
              multiline
              rowsMax={2}
              value={inputTechCard.title}
              variant="outlined"
              onChange={(event) => handleChangeInput(index, event)}
            />
            
            <TextField
              name="status"
              className={classes.textField}
              disabled={edit}
              type="text"
              id="outlined-textarea"
              label="Link para o seu projeto"
              placeholder="https://exemplo.com/example"
              multiline
              variant="outlined"
              value={inputTechCard.status}
              onChange={(event) => handleChangeInput(index, event)}
            />
          </div>
        </form>
      </CardContent>

      <CardActions className={classes.buttons}>
        <IconButton onClick={enableEdit}>
          <FaEdit className={classes.editButton} />
        </IconButton>

        <IconButton onClick={() => handleRemoveCard(index)}>
          <MdDelete className={classes.deleteButton} />
        </IconButton>

        <Button onClick={disableEdit} className={classes.saveButtonOuter}>
          <IconButton className={classes.saveButton}>
            <ImCheckboxChecked></ImCheckboxChecked>
          </IconButton>
          Salvar
        </Button>
      </CardActions>
    </Card>
  );
}
