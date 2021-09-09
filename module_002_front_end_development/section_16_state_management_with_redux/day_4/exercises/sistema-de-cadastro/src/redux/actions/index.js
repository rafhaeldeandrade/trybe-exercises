export const ADD_USER = 'ADD_USER';
export const LOGGED_IN = 'LOGGED_IN';

export const loggedIn = (bool) => ({
  type: LOGGED_IN,
  payload: {
    login: bool,
  }
});

export const addUser = (payload) => ({
  type: ADD_USER, payload
});
