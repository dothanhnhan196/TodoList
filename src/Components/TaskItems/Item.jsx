import React, { Component } from "react";
import { connect } from "react-redux";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStatus: "",
    };
  }

  getLabelColor = (label) => {
    switch (label) {
      case "Frontend":
        return "#722ed1";
      case "Backend":
        return "#13c2c2";
      case "API":
        return "#cf1322";
      case "Issue":
        return "#212529";
      default:
        return null;
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

  onChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.changeStatus(this.props.item.id, this.state.selectedStatus);
      }
    );
  };

  handleEditing = () => {
    this.props.editTask(this.props.item);
    this.props.covertToEditTask();
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

    // Status
    let elmStatus;
    switch (parseInt(item.status, 10)) {
      case 1:
        elmStatus = <i className="fa fa-spinner" />;
        break;
      case 2:
        elmStatus = <i className="fa fa-stop" />;
        break;
      case 3:
        elmStatus = <i className="fa fa-check-square-o" />;
        break;
      default:
        elmStatus = <i className="fa fa-trash-o" />;
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
        <td className="text-center">{this.renderMember()}</td>
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

            <div className="col-2">
              <button type="button" className="btn btn-outline-danger">
                Xóa
              </button>
            </div>

            <div className="col-8">
              <div className="form-group">
                <select
                  className="form-control"
                  name="selectedStatus"
                  onChange={this.onChange}
                >
                  <option defaultValue>Chọn trạng thái</option>
                  <option value={1}>Đang tiến hành</option>
                  <option value={2}>Chưa bắt đầu</option>
                  <option value={3}>Hoàn thành</option>
                  <option value={4}>Hủy bỏ</option>
                </select>
              </div>
            </div>
          </div>
        </td>
        <td className="text-center">{elmStatus}</td>
      </tr>
    );
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    editTask: (item) => {
      const action = {
        type: "EDIT_TASK",
        item,
      };
      dispatch(action);
    },
    covertToEditTask: () => {
      const action = {
        type: "CONVERT_EDIT_TASK",
      };
      dispatch(action);
    },
    changeStatus: (id, status) => {
      const action = {
        type: "CHANGE_STATUS",
        id,
        status,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDisPatchToProps)(Item);
