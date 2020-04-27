import React, { Component } from "react";
import Thead from "./TaskItems/Thead";
import Item from "./TaskItems/Item";

export default class TaskItems extends Component {
  renderTaskItem = () => {
    let { task, editTask, isAddNewTask, taskEditing } = this.props;
    return task.map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          index={index}
          editTask={editTask}
          isAddNewTask={isAddNewTask}
          taskEditing={taskEditing}
        />
      );
    });
  };

  render() {
    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group text-left my-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm công việc"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <thead>
              <Thead />
            </thead>
            <tbody>{this.renderTaskItem()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
