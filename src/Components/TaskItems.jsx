import React, { Component } from "react";
import Thead from "./TaskItems/Thead";
import Item from "./TaskItems/Item";
import Search from "./TaskItems/Search";
import { connect } from "react-redux";

class TaskItems extends Component {
  renderTask = () => {
    let { task } = this.props;
    return task.map((item, index) => {
      return <Item key={index} item={item} index={index} />;
    });
  };

  render() {
    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div>
            <div className="col-md-6">
              <Search />
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <thead>
              <Thead />
            </thead>
            <tbody>{this.renderTask()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  task: state.TaskReducer,
});

export default connect(mapStateToProps, null)(TaskItems);
