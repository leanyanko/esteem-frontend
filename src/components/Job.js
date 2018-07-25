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
          <span className="glyphicon glyphicon-map-marker" />
          {this.props.city}, {this.props.country}
        </span>
      </div>
    );
  }
}

export default Job;
