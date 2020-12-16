import React, { useState } from "react";

import axios from "axios";

import Container from "@material-ui/core/Container";

const JobsCard = () => {
  const [works, setWorks] = useState([]);

  const getJobs = () => {
    axios
      .get(`https://kenziehub.me/user/6e1b29e6-79fc-4159-a020-abb61ab76f3e`)
      .then((res) => {
        setWorks(res.works);
      });
  };

  return (
    <Container maxWidth="xs">
      {works.map((work) => {
        return (
          <div>
            <p>{work.title}</p>
            <p>{work.description}</p>
            <p>{work.deployUrl}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default JobsCard;
