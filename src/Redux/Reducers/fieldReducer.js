import { GET_FIELD, GET_FIELDS } from "../Types/fieldTypes";

const initialState = {
  fields: [],
  field: [],
};

const fieldReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FIELDS:
      return { ...state, fields: payload.fields };
    case GET_FIELD:
      return { ...state, field: payload.field };
    default:
      return state;
  }
};

export default fieldReducer;
