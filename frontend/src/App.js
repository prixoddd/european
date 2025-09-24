import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnhancedTraditionalHomepage from "./components/EnhancedTraditionalHomepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnhancedTraditionalHomepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;