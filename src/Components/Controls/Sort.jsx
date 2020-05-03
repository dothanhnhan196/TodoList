import React, { Component } from "react";

export default class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortType: "",
    };
  }

  onChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        let { changeSortType } = this.props;
        let { sortType } = this.state;
        changeSortType(sortType);
      }
    );
  };

  render() {
    return (
      <div className="form-group text-left">
        <label>Sắp xếp theo công việc</label>
        <select
          className="form-control"
          name="sortType"
          onChange={this.onChange}
        >
          <option value="asc">Từ A đến Z</option>
          <option value="desc">Từ Z đến A</option>
        </select>
      </div>
    );
  }
}
