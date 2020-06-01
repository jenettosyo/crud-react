import React, { Component } from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { deleteEvent } from "../actions/index";

ReactModal.setAppElement("#root");

class TodoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.state = { modalOpen2: false };
    this.state = { todo: props.list.todo };
    this.id = props.list.id;
  }

  render() {
    return (
      <div>
        <div className="todo-box">
          {this.state.todo}
          <div className="btn-box">
            <button
              className="edit-btn"
              onClick={() => this.setState({ modalOpen2: true })}
            >
              EDIT
            </button>
            <button
              className="delete-btn"
              onClick={() => this.setState({ modalOpen: true })}
            >
              DELETE
            </button>
          </div>
        </div>
        <ReactModal
          isOpen={this.state.modalOpen}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="modal-box">
            <FontAwesomeIcon
              icon={faTimes}
              className="close-modal"
              onClick={() => this.setState({ modalOpen: false })}
            />
            <div className="delete-title">DELETE</div>
            <div className="delete-text">{this.state.todo}</div>
            <button className="delete-checkbtn">DELETE</button>
          </div>
        </ReactModal>
        <ReactModal
          isOpen={this.state.modalOpen2}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="modal-box">
            <FontAwesomeIcon
              icon={faTimes}
              className="close-modal"
              onClick={() => this.setState({ modalOpen2: false })}
            />
            <div className="edit-title">EDIT</div>
            <form className="edit-container">
              <input
                type="text"
                className="edit-field"
                value={this.state.todo}
                onChange={(e) => this.setState({ todo: e.target.value })}
              />
              <button
                className="edit-checkbtn"
                onClick={() => this.setState({ modalOpen2: false })}
              >
                EDIT
              </button>
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default connect(null, null)(TodoIndex);
