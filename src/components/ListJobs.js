import React, { Component } from "react";
import "./ListJobs.css";
import jobService from "../services/jobService";
import Job from "./Job";

class ListJobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: null
    };
    this.getJobs = this.getJobs.bind(this);
    this.showJobs = this.showJobs.bind(this);
  }
  componentDidMount() {
    this.getJobs();
  }

  getJobs() {
    jobService
      .getAll()
      .then(resp => {
        console.log(resp.data);
        this.setState({ jobs: resp.data });
      })
      .catch(console.error);
  }

  showJobs() {
    return this.state.jobs
      ? this.state.jobs.map(job => (
          <Job
            className="job"
            key={job._id}
            title={job.title}
            description={job.description}
            city={job.city}
            country={job.country}
          />
        ))
      : "";
  }

  render() {
    return (
      <div className="listjobs">
        <div id="wrapper">
          <div id="filter" className="row">
            <input type="text" placeholder="Keywords" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Any Category" />
            <button className="btn btn-default dropdown-toggle">Search</button>
          </div>
          <div className="row">{this.showJobs()}</div>
        </div>
      </div>
    );
  }
}

export default ListJobs;
