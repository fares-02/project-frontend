import axios from "axios";
import { FAIL, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../Types/authTypes";

export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/signUp", data);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/fieldlist");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/signIn", data);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/fieldlist");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/auth/me", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const logout = () => {
  return { type: LOGOUT };
};
