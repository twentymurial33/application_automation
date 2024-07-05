import React, { useState, useEffect } from "react";
import JobList from "./components/JobList.js";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Replace with actual API call to job board
    fetch("https://api.example.com/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data.jobs))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="App">
      <h1>Web Developer Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
