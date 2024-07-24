import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import upload from "./api/upload";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("resume", selectedFile);

    try {
      const response = await fetch("api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Upload result:", result);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <Header />
      <StyledDiv className="file-upload" style={{ marginTop: "150px" }}>
        <input type="file" onChange={handleFileChange} />
        <StyledButton onClick={handleUpload}>Upload</StyledButton>
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: pink;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: white;
`;

export default Upload;
