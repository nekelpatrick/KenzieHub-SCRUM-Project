import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>

      <div className="body">
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/cadastro">
            <Register />
          </Route>

          <Route path="/usuario">
            <h1> Área do usuário</h1>
          </Route>

          <Route path="/usuarios">
            <h1>Usuarios</h1>
          </Route>

          <Route path="/sobre-nos">
            <h1>Sobre-nós</h1>
          </Route>

          <Route path="/meu-perfil">
            <h1>Meu perfil</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
