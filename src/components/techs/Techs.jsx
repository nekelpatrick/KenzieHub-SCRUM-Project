import TextField from "@material-ui/core/TextField";

import Cookies from "js-cookie";
import axios from 'axios';
import { useForm } from "react-hook-form";

export default function Techs() {
  const base_url = "https://kenziehub.me";
  
  const { register, handleSubmit } = useForm();
  const token = Cookies.get("token");

  const handleForm = (data) => {
    axios
      .post(base_url + '/users/techs', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res));
  };

  axios
    .post(base_url ,{
      headers: {
        Authorization: "Bearer " + authToken,
      },
    })
    .then((res) => {
      dispatch(postTechs(toPost));
    });

  return(
    <Container>
      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          <TextField
            name="title"
            id="title"
            autoComplete="title"
            required
            label="Título da tech"
            inputRef={register}
          />

          <TextField
            name="status"
            id="status"
            autoComplete="status"
            required
            label="status da tech"
            inputRef={register}
          />

          <Button type="submit">Registrar</Button>
        </form>
      </div>
    </Container>
  );
  )
}
