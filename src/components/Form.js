import React, { useState, useContext } from "react";
import { ADD_TODO } from "../actions/index";
import AppContexts from "../contexts/index";

//components
import TodoIndex from "./TodoIndex";

const Form = () => {
  const { dispatch, state } = useContext(AppContexts);
  const [todo, setTodo] = useState("");

  const addSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      todo,
    });
    setTodo("");
  };

  const Uncreable = todo === "";

  return (
    <div>
      <form className="form-container" onSubmit={addSubmit}>
        <input
          type="text"
          className="input-field"
          placeholder="Your todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          name="todo"
        />
        <button className="add-btn" disabled={Uncreable}>
          ADD
        </button>
      </form>
      <div className="todo-container">
        {state.map((list, index) => (
          <TodoIndex list={list} key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Form;
