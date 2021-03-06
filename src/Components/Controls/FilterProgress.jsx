import React, { Component } from "react";

export default class FilterProgress extends Component {
  

  render() {
    return (
      <div className="filter filter--progress">
        <ul className="list-unstyled text-left font-weight-bold mt-3">
          Lọc
          <li
            className="py-1 display-5 lead"
          >
            Tất cả
          </li>
          <li
            className="py-1 display-5 lead"
          >
            <i className="fa fa-spinner mr-2"></i>
            Đang tiến hành
          </li>
          <li
            className="py-1 display-5 lead"
          >
            <i className="fa fa-stop mr-2"></i>
            Chưa bắt đầu
          </li>
          <li
            className="py-1 display-5 lead"
          >
            <i className="fa fa-check-square-o mr-2" />
            Hoàn thành
          </li>
          <li
            className="py-1 display-5 lead"
          >
            <i className="fa fa-trash-o mr-2" />
            Hủy bỏ
          </li>
        </ul>
      </div>
    );
  }
}
