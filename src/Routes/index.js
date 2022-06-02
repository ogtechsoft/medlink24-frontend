import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import ProtectedRoutes from "./ProtectedRoutes";
import UnRestrictedRoutes from "./unRestrictedRoutes";

const AppRoutes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={
              <UnRestrictedRoutes>
                <Signup />
              </UnRestrictedRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <UnRestrictedRoutes>
                <Login />
              </UnRestrictedRoutes>
            }
          >
            {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
          </Route>
          {/* <Route path="/logout" element={<UserLogout />} /> */}

          {/* protected routes */}
          <Route
            path="/meet/:userId"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<Navigate to={`/login`} />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRoutes;
