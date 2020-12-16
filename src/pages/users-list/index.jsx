import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUsersThunk } from "../../store/modules/users-list/thunk";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import UserCard from "../../components/user-card";
import FilterInput from "../../components/filter-input/FilterInput";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export default function UsersList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState("https://kenziehub.me/users?perPage=15&page=");
  useEffect(() => {
    console.log(url + page);
    dispatch(getUsersThunk(url + page, setError));
    scroll.scrollToTop();
  }, [page, url]);

  const usersList = useSelector((state) => state.userList);

  const handleClick = (evt, value) => {
    // VERIFIES IF THERE IS CONTENT IN THE NEXT PAGE
    axios.get(url + value).then((res) => {
      res.data.length && setPage(value);
    });
  };

  return (
    <div className="users-list-container">
      {error ? (
        <p>Ocorreu algum erro</p>
      ) : (
        <>
          <FilterInput setUrl={setUrl} page={page} />
          {usersList.map((user, index) => {
            return <UserCard user={user} key={index} />;
          })}
          <div className={classes.root}>
            <Pagination
              page={page}
              onChange={handleClick}
              siblingCount={-1}
              count={page + 1}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </>
      )}
    </div>
  );
}
