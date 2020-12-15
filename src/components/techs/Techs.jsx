import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import Cookies from "js-cookie";

import {getTechsThunk} from '../../store/modules/techs/thunk'

export default function Techs() {
  const dispatch = useDispatch();
  const techs = useSelector((state) => state.techs);

  useEffect(() => {
    dispatch(getTechsThunk(Cookies.get("token") || ""));
  }, []);

  console.log(techs)

  return(<div style={{color:'red'}}>OLA</div>)
}
