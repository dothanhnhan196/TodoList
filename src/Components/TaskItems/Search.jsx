import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fillterSearch: "",
    };
  }

  onChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        let { changeFillerSearch } = this.props;
        let { fillterSearch } = this.state;
        changeFillerSearch(fillterSearch);
      }
    );
  };

  render() {
    return (
      <div className="form-group text-left my-0">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm công việc"
          onChange={this.onChange}
          name="fillterSearch"
        />
      </div>
    );
  }
}
