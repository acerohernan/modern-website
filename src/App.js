import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";

import "./styles/GlobalStyle.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} exact path="/" />
      </Routes>
    </Router>
  );
}

export default App;
