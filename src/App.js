import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import LeadsPage from "./pages/leads-page/leads-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import CreateCustomerPage from "./pages/create-customer-page/create-customer-page.component";
import CustomersPage from "./pages/customers-page/customers-page.component";
import PrivateRoute from "./components/common/private-route.component";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        {/* <Route path="/customers" element={<CustomersPage />} /> */}
        {/* <Route path="/leads" element={<LeadsPage />} /> */}
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/create-customer/:leadId"
          element={<CreateCustomerPage />}
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <CustomersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LeadsPage />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/create-customer/:leadId"
          element={
            <PrivateRoute>
              <SignUpPage />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </Provider>
  );
}

export default App;
