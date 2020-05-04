import React, { Component } from "react";
import { connect } from "react-redux";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProgress: "",
    };
  }

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

  onChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        let { selectedProgress } = this.state;
        let { changeProgress, item } = this.props;
        changeProgress(selectedProgress, item.id);
      }
    );
  };

  render() {
    let { index, item, editTask } = this.props;

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

    // Progress
    let elmClassProgress;
    switch (parseInt(item.status)) {
      case 1:
        elmClassProgress = "fa fa-spinner";
        break;
      case 2:
        elmClassProgress = "fa fa-stop";
        break;
      case 3:
        elmClassProgress = "fa fa-check-square-o";
        break;
      case 4:
        elmClassProgress = "fa fa-trash-o";
        break;
      default:
        elmClassProgress = "fa fa-stop";
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
                onClick={() => editTask(item)}
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
                  id="exampleFormControlSelect1"
                  onChange={this.onChange}
                  name="selectedProgress"
                >
                  <option value={1}>Đang tiến hành</option>
                  <option value={2}>Chưa bắt đầu</option>
                  <option value={3}>Hoàn thành</option>
                  <option value={4}>Hủy bỏ</option>
                </select>
              </div>
            </div>
          </div>
        </td>
        <td className="text-center">
          <i className={`${elmClassProgress} mr-2`} />
        </td>
      </tr>
    );
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    editTask: (taskEditing) => {
      const action = {
        type: "EDIT_TASK",
        taskEditing,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDisPatchToProps)(Item);
