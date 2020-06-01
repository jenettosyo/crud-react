export const ADD_EVENT = "ADD_EVENT";

export const addEvent = (todo) => (dispatch) => {
  dispatch({ type: ADD_EVENT, todo });
};
