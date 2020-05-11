import React, { Component } from "react";
import { connect } from "react-redux";

class AddNewTask extends Component {
  hanleAddNewTask = () => {
    this.props.convertToAddNewTask();
    this.props.clearForm();
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

const mapDispatchToProps = (dispatch) => ({
  convertToAddNewTask: () => {
    const action = {
      type: "CONVERT_ADD_NEW_TASK",
    };
    dispatch(action);
  },
  clearForm: () => {
    const action = {
      type: "CLEAR_FORM",
    };
    dispatch(action);
  },
});

export default connect(null, mapDispatchToProps)(AddNewTask);
