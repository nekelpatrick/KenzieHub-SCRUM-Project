import "./App.css";

import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setTokenThunk } from "./store/modules/token/thunk";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Home from "./pages/home/Home.jsx";
import UsersList from "./pages/users-list/UserList";
import UserProfile from "./pages/user-profile/UserProfile";
import UserArea from "./pages/user-area/UserArea";
import Techs from "./components/techs/Techs";
import RegisterPage from "./pages/register";
import JobsForm from "./pages/new-job";

function App() {
  const token = useSelector((state) => state.userToken);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenCookie = Cookies.get("token") || "";
    !!tokenCookie && dispatch(setTokenThunk(tokenCookie));
  }, []);
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

          {token ? (
            <>
              <Route path="/login">{history.push("/")}</Route>
              <Route path="/cadastro">{history.push("/")}</Route>

              <Route path="/usuario">
                <h1> Área do usuário</h1>
                <UserArea />
              </Route>

              <Route path="/usuarios">
                <UsersList />
              </Route>

              <Route path="/meu-perfil">
                <UserProfile />
              </Route>

              <Route path="/newjob">
                <JobsForm />
              </Route>

              <Route path="/newtech">
                <Techs></Techs>
              </Route>
            </>
          ) : (
            <>
              <Route path="/usuario">{history.push("/")}</Route>
              <Route path="/usuarios">{history.push("/")}</Route>
              <Route path="/meu-perfil">{history.push("/")}</Route>
              <Route path="/newjob">{history.push("/")}</Route>
              <Route path="/newtech">{history.push("/")}</Route>

              <Route path="/cadastro">
                <RegisterPage />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </>
          )}
        </Switch>
      </div>
    </div>
  );
}

export default App;
