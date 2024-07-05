const JobItem = ({ job }) => (
  <div className="job-item">
    <h3>{job.title}</h3>
    <p>{job.company}</p>
    <p>{job.location}</p>
    <p>{job.description}</p>
  </div>
);

export default JobItem;
