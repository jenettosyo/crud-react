export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";

export const addEvent = (todo) => (dispatch) => {
  dispatch({ type: ADD_EVENT, todo });
};

export const deleteEvent = (id) => (dispatch) => {
  dispatch({ type: DELETE_EVENT, id });
};

export const editEvent = (todo, id) => (dispatch) => {
  dispatch({ type: EDIT_EVENT, id, todo });
};
