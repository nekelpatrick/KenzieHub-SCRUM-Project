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
    minWidth: 250,
    marginTop: "10%",
    maxWidth: 300,
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
      width: "19vw",
    },
  },
}));

export default function UserCard() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const enableEdit = () => {
    setEdit(false);
  };

  const disableEdit = () => {
    setEdit(true);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <form className={classes.form} noValidate autoComplete="off">
          <FormControl>
            <TextField
              className={classes.textField}
              disabled={edit}
              id="outlined-multiline-flexible"
              label="Nome do Projeto "
              multiline
              rowsMax={2}
              value={value}
              onChange={handleChange}
              variant="outlined"
            />
          </FormControl>
          <TextField
            className={classes.textField}
            disabled={edit}
            id="outlined-multiline-static"
            label="Descreva o projeto"
            placeholder="Descreva o projeto"
            multiline
            rows={5}
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            disabled={edit}
            type="url"
            id="outlined-textarea"
            label="Insira um Link para o seu projeto"
            placeholder="https://exemplo.com/example"
            multiline
            variant="outlined"
          />
        </form>
      </CardContent>

      <CardActions>
        <IconButton onClick={enableEdit}>
          <FaEdit className={classes.editButton} />
        </IconButton>

        <IconButton>
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
