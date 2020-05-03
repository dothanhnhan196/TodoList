import React, { Component } from "react";
import Thead from "./TaskItems/Thead";
import Item from "./TaskItems/Item";
import Search from "./TaskItems/Search";

export default class TaskItems extends Component {
  renderTaskItem = () => {};

  render() {
    let {
      editTask,
      isAddNewTask,
      taskEditing,
      changeProgress,
      task,
      fillterType,
      fillterProgress,
      changeFillerSearch,
      fillterSearch,
      sortType,
    } = this.props;

    let fillterTask = [];
    switch (fillterType) {
      case "fillterProgress":
        if (fillterProgress === -1) {
          fillterTask = task;
        } else {
          for (let elmtask of task) {
            if (parseInt(elmtask.status, 10) === fillterProgress) {
              fillterTask = [...fillterTask, elmtask];
            }
          }
        }
        break;
      case "fillterSearch":
        fillterTask = task.filter((task) => {
          return (
            task.name.toLowerCase().indexOf(fillterSearch.toLowerCase()) !== -1
          );
        });
        break;

      case "sort":
        fillterTask = task;
        if (sortType === "asc") {
          fillterTask.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
          });
        }

        if (sortType === "desc") {
          fillterTask.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
          });
        }

        break;

      default:
        fillterTask = task;
        break;
    }

    let elmItem = fillterTask.map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          index={index}
          editTask={editTask}
          isAddNewTask={isAddNewTask}
          taskEditing={taskEditing}
          changeProgress={changeProgress}
        />
      );
    });

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
              <Search changeFillerSearch={changeFillerSearch} />
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <thead>
              <Thead />
            </thead>
            <tbody>{elmItem}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
