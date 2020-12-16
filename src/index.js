import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "./store";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#051C53",
      dark: "#16264a",
    },
    secondary: {
      light: "#B8A0F1",
      main: "#002d96",
      dark: "#16264a",
      // dark: será calculada com base palette.secondary.main,
      contrastText: "#F31B4F",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
