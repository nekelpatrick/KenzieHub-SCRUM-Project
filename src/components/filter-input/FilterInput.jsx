import { TextField, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  filterInputContainer: {
    display: "flex",
    alignItems: "center",
    maxWidth: 660,
    marginLeft: "auto",
    marginRight: "auto",
  },
  filterInput: {
    flex: "1 0 80%",
    "& div": {
      "& fieldset": {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
    },
  },
  filterButton: {
    flex: "1 0 20%",
    height: 56,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    boxShadow: "none",
  },
}));

export default function FilterInput({ setUrl }) {
  const classes = useStyles();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    !!evt.target[0].value
      ? setUrl(
          "https://kenziehub.me/users?perPage=15&tech=" +
            evt.target[0].value +
            "&page="
        )
      : setUrl("https://kenziehub.me/users?perPage=15&page=");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.filterInputContainer}>
      <TextField
        className={classes.filterInput}
        variant="outlined"
        id="filterInput"
        label="Tecnologia"
        name="filterInput"
      />
      <Button
        className={classes.filterButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        Filtrar
      </Button>
    </form>
  );
}
