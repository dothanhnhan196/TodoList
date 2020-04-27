import React, { Component } from "react";

export default class Item extends Component {
  getLabelColor = (label) => {
    let labelColor;
    switch (label) {
      case "Frontend":
        return (labelColor = "#328b03");
      case "Backend":
        return (labelColor = "#673fff");
      case "API":
        return (labelColor = "#06b2c1");
      case "Issue":
        return (labelColor = "#d62525");
      default:
        return (labelColor = "");
    }
  };

  renderLabel = () => {
    let { item } = this.props;
    return item.labelArr.map((label, index) => {
      return (
        <i
          key={index}
          className="fa fa-circle"
          style={{ color: this.getLabelColor(label) }}
        />
      );
    });
  };

  renderMember = () => {
    let { item } = this.props;
    return item.memberIDArr.map((member, index) => {
      return (
        <img
          src={`./img/${member}.png`}
          className="user"
          alt="imgUser"
          key={index}
        />
      );
    });
  };

  handleEditing = () => {
    let { editTask, item } = this.props;
    editTask(item);
  };

  render() {
    let { index, item } = this.props;

    // Priority
    let elmPriority;
    let classPriority;

    switch (parseInt(item.priority)) {
      case 1:
        elmPriority = "Cao";
        classPriority = "text-danger";
        break;
      case 2:
        elmPriority = "Trung bình";
        classPriority = "text-success";
        break;
      case 3:
        elmPriority = "Thấp";
        classPriority = "text-primary";
        break;
      default:
        elmPriority = "";
        classPriority = "";
        break;
    }

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{this.renderLabel()}</td>
        <td className={`${classPriority} font-weight-bold text-center`}>
          {elmPriority}
        </td>
        <td className="text-center">
          {this.renderMember()}
        </td>
        <td className="text-center">
          <div className="form-row">
            <div className="col-2">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-toggle="modal"
                data-target="#modalTask"
                onClick={this.handleEditing}
              >
                Sửa
              </button>
            </div>
            <div className="col-10">
              <div className="form-group">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Đang tiến hành</option>
                  <option>Chưa bắt đầu</option>
                  <option>Hoàn thành</option>
                  <option>Hủy bỏ</option>
                </select>
              </div>
            </div>
          </div>
        </td>
        <td className="text-center">
          <i className="fa fa-check-square-o mr-2" />
        </td>
      </tr>
    );
  }
}
