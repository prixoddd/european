import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinalEnhancedHomepage from "./components/FinalEnhancedHomepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FinalEnhancedHomepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;