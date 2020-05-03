import React, { Component } from "react";
import { connect } from "react-redux";

class InitializeTask extends Component {
  render() {
    let { initializeTask } = this.props;
    return (
      <div>
        <button
          type="button"
          className="btn my-2 btn--initializeTask"
          onClick={initializeTask}
        >
          <i className="fa fa-pencil-square-o" />
          Lấy dữ liệu từ LocalStorage
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeTask: () => {
      const action = {
        type: "INITIALlIZE_TASKS",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(InitializeTask);
