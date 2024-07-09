import React, { useState } from "react";
import Header from "./components/Header";

function Upload() {
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
    <div>
      <Header />
      <div className="file-upload" style={{ marginTop: "150px" }}>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>
    </div>
  );
}

export default Upload;
