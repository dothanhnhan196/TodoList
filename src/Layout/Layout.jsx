import React, { Component } from "react";
import Modal from "../Components/Modal";
import "../App.css";
import Controls from "../Components/Controls";
import TaskItems from "../Components/TaskItems";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Controls />

            {/* DISPLAY */}
            <TaskItems />
          </div>
        </div>

        {/* MODAL */}
        <Modal />
      </div>
    );
  }
}
