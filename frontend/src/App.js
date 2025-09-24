import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModernHomepage from "./components/ModernHomepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ModernHomepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;