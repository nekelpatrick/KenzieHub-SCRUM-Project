import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Home from "./pages/home/Home.jsx";
import UsersList from "./pages/users-list/UserList";
import UserProfile from "./pages/user-profile/UserProfile";

import RegisterPage from "./pages/register";
import UserArea from "./pages/user-area";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>

      <div className="body">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/cadastro">
            <RegisterPage />
          </Route>

          <Route path="/usuario">
            <UserArea />
          </Route>

          <Route path="/usuarios">
            <UsersList />
          </Route>

          <Route path="/sobre-nos">
            <h1>Sobre-nós</h1>
          </Route>

          <Route path="/meu-perfil">
            <h1>Meu perfil</h1>
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
