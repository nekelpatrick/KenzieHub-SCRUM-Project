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
    type: "light",
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
