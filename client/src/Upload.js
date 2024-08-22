import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/Header";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setUploadStatus("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("resume", selectedFile);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus("File uploaded and processed");
      setKeywords(response.data.keywords);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Error uploading file");
    }
  };

  return (
    <div>
      <Header />
      <StyledDiv onSubmit={handleSubmit} style={{ marginTop: "150px" }}>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
        {/* <StyledButton onClick={handleUpload}>Upload</StyledButton> */}
        <StyledButton type="submit">Upload</StyledButton>
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.form`
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
  cursor: pointer;
`;

export default Upload;

// {uploadStatus && <p>{uploadStatus}</p>}
// {keywords.length > 0 && (
//   <div>
//     <h2>Extracted Keywords:</h2>
//     <ul>
//       {keywords.map((keyword, index) => (
//         <li key={index}>{keyword}</li>
//       ))}
//     </ul>
//   </div>
// )}
