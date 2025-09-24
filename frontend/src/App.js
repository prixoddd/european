import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TraditionalHomepage from "./components/TraditionalHomepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TraditionalHomepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;