import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions/index";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const event = { todo: action.todo };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    case EDIT_TODO:
      const map = state.map((list) => {
        const check = () => {
          if (action.id === list.id) {
            Object.defineProperty(list, "todo", {
              writable: true,
            });
            list.todo = action.currentTodo;
          }
        };
        return check();
      });
      return [...state];

    case DELETE_TODO:
      return state.filter((list) => {
        return action.id !== list.id;
      });

    default:
      return state;
  }
};

export default todos;
