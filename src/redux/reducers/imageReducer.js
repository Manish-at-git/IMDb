import { MOVIELISTDATA } from "../constants/constants";

const imageReducer = (state = [], action) => {
  if (action.type === MOVIELISTDATA.LOAD_SUCCESS) {
    state = [];
    return [...state, ...action.data];
  }
  return state;
};

export default imageReducer;
