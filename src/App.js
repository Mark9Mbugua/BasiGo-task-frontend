import React from "react";
import { Route, Routes } from "react-router-dom";

import AuthPage from "./pages/auth-page/auth-page.component";
import LeadsPage from "./pages/leads-page/leads-page.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LeadsPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
