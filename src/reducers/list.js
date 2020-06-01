import { ADD_EVENT } from "../actions/index";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      const event = { todo: action.todo };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    default:
      return state;
  }
};
