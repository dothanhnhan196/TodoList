import React, { Component } from "react";

export default class FilterProgress extends Component {
  
  handleFillterProgress = (fillterProgress) => {
    let { changeFillterProgress } = this.props;
    changeFillterProgress(fillterProgress);
  };

  render() {
    return (
      <div className="filter filter--progress">
        <ul className="list-unstyled text-left font-weight-bold mt-3">
          Lọc
          <li
            className="py-1 display-5 lead"
            onClick={this.handleFillterProgress.bind(this, -1)}
          >
            Tất cả
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.handleFillterProgress.bind(this, 1)}
          >
            <i className="fa fa-spinner mr-2"></i>
            Đang tiến hành
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.handleFillterProgress.bind(this, 2)}
          >
            <i className="fa fa-stop mr-2"></i>
            Chưa bắt đầu
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.handleFillterProgress.bind(this, 3)}
          >
            <i className="fa fa-check-square-o mr-2" />
            Hoàn thành
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.handleFillterProgress.bind(this, 4)}
          >
            <i className="fa fa-trash-o mr-2" />
            Hủy bỏ
          </li>
        </ul>
      </div>
    );
  }
}
