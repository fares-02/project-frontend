import { GET_FIELD, GET_FIELDS } from "../Types/fieldTypes";
import axios from "axios";

export const get_fields = () => async (dispatch) => {
  try {
    const res = await axios.get("/field/fields");

    dispatch({ type: GET_FIELDS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const add_field = (data) => async (dispatch) => {
  try {
    await axios.post("/field/addfield", data);
    dispatch(get_fields());
  } catch (error) {
    console.log(error);
  }
};

export const delete_field = (id) => async (dispatch) => {
  try {
    await axios.delete(`/field/fields/${id}`);
    dispatch(get_fields());
  } catch (error) {
    console.log(error);
  }
};

export const edit_field = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/field/fields/${id}`, data);
    dispatch(get_fields());
  } catch (error) {
    console.log(error);
  }
};

export const get_field = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/field/fields/${id}`);
    dispatch({ type: GET_FIELD, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
