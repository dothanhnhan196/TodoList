import React, { Component } from "react";

export default class Thead extends Component {
  render() {
    return (
      <tr>
        <th className="text-center">STT</th>
        <th className="text-center">Công việc</th>
        <th className="text-center">Nhãn</th>
        <th className="text-center">Độ ưu tiên</th>
        <th className="text-center">Người thực hiện</th>
        <th className="text-center">Xử lý</th>
        <th className="text-center">Tình trạng</th>
      </tr>
    );
  }
}
