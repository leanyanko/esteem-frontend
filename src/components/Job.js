import React, { Component } from "react";
import "./Job.css";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="job">
        <span className="clogo" />
        <span className="title"> {this.props.title} </span>
        <span className="description">
          {this.props.city}, {this.props.country}
        </span>
      </div>
    );
  }
}

export default Job;
