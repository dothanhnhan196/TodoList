import React, { Component } from "react";

export default class InitializeTask extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn my-2 btn--initializeTask"
          data-toggle="modal"
          data-target="#modalTask"
        >
          <i className="fa fa-pencil-square-o" />
           Lấy dữ liệu từ LocalStorage
        </button>
      </div>
    );
  }
}
