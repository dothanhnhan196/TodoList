import React, { Component } from "react";

export default class AddNewTask extends Component {
  hanleAddNewTask = () => {
    let { clearBeforeAddNewTask } = this.props;
    clearBeforeAddNewTask();
  };

  render() {
    return (
      <button
        type="button"
        className="btn my-3 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
        onClick={this.hanleAddNewTask}
      >
        <i className="fa fa-pencil-square-o" />
        Tạo Task mới
      </button>
    );
  }
}
