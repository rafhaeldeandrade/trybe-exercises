import { ADD_USER, LOGGED_IN } from "../actions";

const INITIAL_STATE = {
  login: false,
  data: [],
}

const registrationReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case ADD_USER:
    return {
      ...state,
      data: [...state.data, {...action.payload}]
    }
  case LOGGED_IN:
    return {
      ...state,
      login: action.payload.login,
    }
  default:
    return state;
  }
};

export default registrationReducer;
