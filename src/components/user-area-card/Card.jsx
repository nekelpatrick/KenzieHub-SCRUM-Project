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

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
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
      width: "13.5vw",
      padding: "20px",
    },
    "& .MuiFormLabel-root": {
      fontSize: "14px",
    },
  },
}));

export default function UserCard({
  inputFields,
  setInputFields,
  inputField,
  index,
}) {
  const classes = useStyles();

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
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleRemoveCard = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
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
              value={inputField.title}
              variant="outlined"
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              name="description"
              className={classes.textField}
              disabled={edit}
              id="outlined-multiline-static"
              label="Descreva o projeto"
              placeholder="Descreva o projeto"
              multiline
              rows={5}
              variant="outlined"
              value={inputField.description}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              name="url"
              className={classes.textField}
              disabled={edit}
              type="url"
              id="outlined-textarea"
              label="Link para o seu projeto"
              placeholder="https://exemplo.com/example"
              multiline
              variant="outlined"
              value={inputField.url}
              onChange={(event) => handleChangeInput(index, event)}
            />
          </div>
        </form>
      </CardContent>

      <CardActions>
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
