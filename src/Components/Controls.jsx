import React, { Component } from "react";
import AddNewTask from "./Controls/AddNewTask";
import InitializeTask from "./Controls/InitializeTask";
import FilterProgress from "./Controls/FilterProgress";
import FilterLabel from "./Controls/FilterLabel";
import FilterPriority from "./Controls/FilterPriority";
import Sort from "./Controls/Sort";

export default class Controls extends Component {
  render() {
    let { gennerateData } = this.props;
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.png" className="ml-2 user" alt="user" />
          <h3 className="text-white d-inline font-weight-light ml-2">
            Đỗ Thành Nhân
          </h3>
        </div>
        <AddNewTask />
        <InitializeTask gennerateData={gennerateData} />
        <div className="px-3">
          <FilterProgress />
          <FilterLabel />
          <FilterPriority />
          <Sort />
        </div>
      </div>
    );
  }
}
