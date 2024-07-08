import React, { useState, useEffect } from "react";
// import JobList from "./components/JobList.js";
import SignIn from "./SignIn.js";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log(`Uploading: ${selectedFile.name}`);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Web Developer Job Board</h1>
      <SignIn />
      <div className="file-upload">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>
    </div>
  );
};

export default App;
