import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    user_type: "1",
  });

  const showErr = (err) => toast(err);
  const { username, email, password, user_type } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user, "============");
    await axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}signup`, user)
      .then((result) => {
        console.log(result, "RES");
        if (result.data.success) {
          navigate("/login");
        }
        showErr("All fileds are required!");
      })
      .catch((err) => {
        console.log(err, "ERR");
        showErr("something went wrong!");
      });
    // const userId = 123;
    // const token = "kjasdasdhahsdlaskl";
    // localStorage.setItem("user_id", userId);
    // localStorage.setItem("token", token);
  };

  return (
    <>
      <div className="login_wrapper">
        <div className="login_form">
          <h1>Create your account</h1>
          <p>Enter your credential to access your account</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dr_patient"
                      id="Doctor1"
                      value={1}
                      onChange={(e) => onInputChange(e)}
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="Doctor1">
                      Doctor
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dr_patient"
                      id="patient1"
                      value={2}
                      onChange={(e) => onInputChange(e)}
                    />
                    <label className="form-check-label" htmlFor="patient1">
                      Patient
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control form_custom"
                    id="fullName"
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="email_user" className="form-label">
                    Enter Email
                  </label>
                  <input
                    type="email"
                    className="form-control form_custom"
                    id="email_id"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Your email"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="password_user" className="form-label">
                    Enter Password
                  </label>
                  <input
                    type="text"
                    className="form-control form_custom"
                    id="password_user"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Your Password"
                  />
                </div>
              </div>

              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary px-4">
                  Signup
                </button>
              </div>
              <div className="col-md-12">
                <p style={{ fontSize: "18px" }}>
                  Already a member <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
