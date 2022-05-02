import { FAIL, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../Types/authTypes";

const initialState = {
  user: {},
  errors: [],
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user };
    case GET_CURRENT:
      return { ...state, user: payload };
    case FAIL:
      return { ...state, errors: payload.errors, user: null };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null };
    default:
      return state;
  }
};
export default authReducer;
