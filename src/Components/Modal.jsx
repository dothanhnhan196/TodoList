import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      description: "",
      priority: "",
      memberIDArr: "",
      labelArr: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    let { addNewTask, onEditTask } = this.props;
    e.preventDefault();
    addNewTask(this.state);
    onEditTask(this.state);
  };

  memberChange = (newMember) => {
    this.setState({
      memberIDArr: newMember,
    });
  };

  labelChange = (newLabel) => {
    this.setState({
      labelArr: newLabel,
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps && nextProps.isAddNewTask) {
      this.clearForm();
    }
    if (nextProps && nextProps.taskEditing && !nextProps.isAddNewTask) {
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        description: nextProps.taskEditing.description,
        priority: nextProps.taskEditing.priority,
        memberIDArr: nextProps.taskEditing.memberIDArr,
        labelArr: nextProps.taskEditing.labelArr,
      });
    }
  };

  clearForm = () => {
    this.setState({
      id: "",
      name: "",
      description: "",
      priority: "",
      memberIDArr: "",
      labelArr: "",
    });
  };
  render() {
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {this.props.isAddNewTask ? "Thêm công việc" : "Sửa công việc"}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                </div>
                <div className="form-group">
                  <label>Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    name="description"
                    onChange={this.onChange}
                    value={this.state.description}
                  />
                </div>
                <div className="form-group">
                  <label>Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    name="priority"
                    onChange={this.onChange}
                    value={this.state.priority}
                  >
                    <option value={-1}>Chọn độ ưu tiên</option>
                    <option value={3}>Thấp</option>
                    <option value={2}>Trung bình</option>
                    <option value={1}>Cao</option>
                  </select>
                </div>
                <br />
                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="memberIDArr"
                  value={this.state.memberIDArr}
                  onChange={this.memberChange}
                >
                  Người thực hiện:
                  <br />
                  <label className="mr-3">
                    <Checkbox value="user_2" /> Vy
                  </label>
                  <label className="mr-3">
                    <Checkbox value="user_3" /> Trường
                  </label>
                  <label className="mr-3">
                    <Checkbox value="user_4" /> Trọng
                  </label>
                  <label className="mr-3">
                    <Checkbox value="user_5" /> Nhựt
                  </label>
                </CheckboxGroup>
                <br />
                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="labelArr"
                  value={this.state.labelArr}
                  onChange={this.labelChange}
                >
                  Nhãn:
                  <br />
                  <label className="mr-3">
                    <Checkbox value="Frontend" /> Frontend
                  </label>
                  <label className="mr-3">
                    <Checkbox value="Backend" /> Backend
                  </label>
                  <label className="mr-3">
                    <Checkbox value="API" /> API
                  </label>
                  <label className="mr-3">
                    <Checkbox value="Issue" /> Issue
                  </label>
                </CheckboxGroup>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  {this.props.isAddNewTask ? "Thêm công việc" : "Sửa công việc"}
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
