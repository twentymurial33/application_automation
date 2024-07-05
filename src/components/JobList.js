import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs }) => (
  <div className="job-list">
    {jobs.map((job) => (
      <JobItem key={job.id} job={job} />
    ))}
  </div>
);

export default JobList;
