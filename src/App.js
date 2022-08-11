import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import AuthPage from "./pages/auth-page/auth-page.component";
import LeadsPage from "./pages/leads-page/leads-page.component";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LeadsPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
