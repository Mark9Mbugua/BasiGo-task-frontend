import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import AuthPage from "./pages/sign-in-page/sign-in-page.component";
import LeadsPage from "./pages/leads-page/leads-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LeadsPage />} />
        <Route path="/sign-in" element={<AuthPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
