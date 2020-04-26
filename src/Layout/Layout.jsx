import React, { Component } from "react";
import Modal from "../Components/Modal";
import "../App.css";
import Controls from "../Components/Controls";
import TaskItems from "../Components/TaskItems";
import listOfTask from "../Model/getData.jsx";

export default class Layout extends Component {
  render() {
    console.log(listOfTask.list);
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            <Controls />
            <TaskItems />
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}
