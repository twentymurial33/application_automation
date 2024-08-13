// JobsList.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs here
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("https://api.example.com/jobs");
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <StyledJobsList>
      <h2>Jobs List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> - {job.company}
          </li>
        ))}
      </ul>
    </StyledJobsList>
  );
};

const StyledJobsList = styled.div`
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }
`;

export default JobsList;
