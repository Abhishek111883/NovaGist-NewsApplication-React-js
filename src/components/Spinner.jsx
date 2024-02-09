import { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-2">
        <div className="spinner-border text-danger my-3" role="status"></div>
      </div>
    );
  }
}
