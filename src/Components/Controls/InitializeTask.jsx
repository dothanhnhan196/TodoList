import React, { Component } from "react";

export default class InitializeTask extends Component {

  initializeTask = () => {
    this.props.gennerateData()
  }

  render() {
    return (
      <div>
        <button type="button" className="btn my-2 btn--initializeTask" onClick={this.initializeTask}>
          <i className="fa fa-pencil-square-o" />
          Lấy dữ liệu từ LocalStorage
        </button>
      </div>
    );
  }
}
