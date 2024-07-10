import SignIn from "./SignIn.js";
import Upload from "./Upload.js";
import React, { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
