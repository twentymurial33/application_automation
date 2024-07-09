import SignIn from "./SignIn.js";
import Upload from "./Upload.js";
import React, { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {/* <h1 style={{ textAlign: "center" }}>Software Developer Job Board</h1>
      <SignIn />
    </div> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
};

export default App;
