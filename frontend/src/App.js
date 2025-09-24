import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinalEnhancedHomepage from "./components/FinalEnhancedHomepage";
import CorporateHomepage from "@/components/CorporateHomepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<FinalEnhancedHomepage />} />*/}
          <Route path="/" element={<CorporateHomepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
