import { ADD_EVENT, DELETE_EVENT, EDIT_EVENT } from "../actions/index";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      const event = { todo: action.todo };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    case DELETE_EVENT:
      return state.filter((list) => {
        return action.id !== list.id;
      });

    case EDIT_EVENT:
      const map = state.map((list) => {
        const check = () => {
          if (action.id === list.id) {
            Object.defineProperty(list, "todo", {
              writable: true,
            });
            list.todo = action.todo;
          }
        };
        return check();
      });
      return [...state];

    default:
      return state;
  }
};
