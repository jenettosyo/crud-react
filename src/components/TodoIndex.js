import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import AppContexts from "../contexts/index";
import { EDIT_TODO, DELETE_TODO } from "../actions/index";

ReactModal.setAppElement("#root");

const TodoIndex = (props) => {
  const { dispatch } = useContext(AppContexts);
  const [currentTodo, setCurrentTodo] = useState(props.list.todo);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const id = props.list.id;

  const Edithandle = (e) => {
    e.preventDefault();
    dispatch({
      type: EDIT_TODO,
      id,
      currentTodo,
    });
    setModalOpen2(false);
  };

  const Deletehandle = (e) => {
    e.preventDefault();
    dispatch({
      type: DELETE_TODO,
      id,
    });
    setModalOpen(false);
  };

  return (
    <div>
      <div className="todo-box">
        {props.list.todo}
        <div className="btn-box">
          <button className="edit-btn" onClick={() => setModalOpen2(true)}>
            EDIT
          </button>
          <button className="delete-btn" onClick={() => setModalOpen(true)}>
            DELETE
          </button>
        </div>
      </div>
      <ReactModal
        isOpen={modalOpen}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modal-box">
          <FontAwesomeIcon
            icon={faTimes}
            className="close-modal"
            onClick={() => setModalOpen(false)}
          />
          <div className="delete-title">DELETE</div>
          <div className="delete-text">{props.list.todo}</div>
          <button className="delete-checkbtn" onClick={Deletehandle}>
            DELETE
          </button>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={modalOpen2}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modal-box">
          <FontAwesomeIcon
            icon={faTimes}
            className="close-modal"
            onClick={() => setModalOpen2(false)}
          />
          <div className="edit-title">EDIT</div>
          <form className="edit-container">
            <input
              type="text"
              className="edit-field"
              value={currentTodo}
              onChange={(e) => setCurrentTodo(e.target.value)}
            />
            <button className="edit-checkbtn" onClick={Edithandle}>
              EDIT
            </button>
          </form>
        </div>
      </ReactModal>
    </div>
  );
};

export default TodoIndex;
