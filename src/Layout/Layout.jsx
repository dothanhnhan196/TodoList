import React, { Component } from "react";
import Modal from "../Components/Modal";
import "../App.css";
import Controls from "../Components/Controls";
import TaskItems from "../Components/TaskItems";
import listOfTask from "../Model/getData.jsx";
import randomid from "randomid";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      taskEditing: null,
      isAddNewTask: true,
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
    if (this.state.isAddNewTask) {
      data.id = randomid(5);
      let taskJson = JSON.parse(localStorage.getItem("task"));
      taskJson = [...taskJson, data];
      this.setState({
        task: taskJson,
      });
      localStorage.setItem("task", JSON.stringify(taskJson));
    }
  };

  clearBeforeAddNewTask = () => {
    this.setState({
      isAddNewTask: true,
    });
  };

  editTask = (data) => {
    this.setState({
      isAddNewTask: false,
      taskEditing: data,
    });
  };

  onEditTask = (data) => {
    if (!this.state.isAddNewTask) {
      let taskJson = JSON.parse(localStorage.getItem("task"));
      for (let index in taskJson) {
        if (taskJson[index].id === data.id) {
          taskJson[index].id = data.id;
          taskJson[index].name = data.name;
          taskJson[index].labelArr = data.labelArr;
          taskJson[index].status = data.status;
          taskJson[index].description = data.description;
          taskJson[index].priority = data.priority;
          taskJson[index].memberIDArr = data.memberIDArr;
        }
      }
      this.setState({
        task: taskJson,
      });
      localStorage.setItem("task", JSON.stringify(taskJson));
    }
  };

  render() {
    let { task, isAddNewTask, taskEditing } = this.state;
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            <Controls
              gennerateData={this.gennerateData}
              clearBeforeAddNewTask={this.clearBeforeAddNewTask}
            />
            <TaskItems task={task} editTask={this.editTask} />
          </div>
        </div>
        <Modal
          addNewTask={this.addNewTask}
          isAddNewTask={isAddNewTask}
          taskEditing={taskEditing}
          onEditTask={this.onEditTask}
        />
      </div>
    );
  }
}
