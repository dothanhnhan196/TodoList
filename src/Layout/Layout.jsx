import React, { Component } from "react";
import Modal from "../Components/Modal";
import "../App.css";
import Controls from "../Components/Controls";
import TaskItems from "../Components/TaskItems";
import listOfTask from "../Model/getData.jsx";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
    };
  }

  gennerateData = () => {
    localStorage.setItem("task", JSON.stringify(listOfTask.list));
  };

  componentWillMount = () => {
    let taskJson = JSON.parse(localStorage.getItem("task"));
    this.setState({
      task: taskJson,
    });
  };

  addNewTask = (data) => {
    console.log(data);
    let taskJson = JSON.parse(localStorage.getItem("task"));
    taskJson = [...taskJson, data];
    this.setState({
      task: taskJson,
    });
    localStorage.setItem("task", JSON.stringify(taskJson));
  };

  render() {
    let { task } = this.state;
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            <Controls gennerateData={this.gennerateData} />
            <TaskItems task={task} />
          </div>
        </div>
        <Modal addNewTask={this.addNewTask} />
      </div>
    );
  }
}
