import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const showErr = (err) => toast(err);

  const { email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user, "============");
    await axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}login`, user)
      .then((result) => {
        console.log(result, "res");
        if (result.data.success) {
          localStorage.setItem("user_id", result.data.result.id);
          localStorage.setItem("token", result.data.result.token);
          localStorage.setItem("username", result.data.result.username);
          navigate(`/meet/${result.data.result.id}`);
        }
        navigate("/login");
        showErr("Email or password is wrong!");
      })
      .catch((err) => {
        console.log(err);
        showErr("Something went wrong!");
      });
    // const userId = 123;
    // const token = "kjasdasdhahsdlaskl";
    // localStorage.setItem("user_id", userId);
    // localStorage.setItem("token", token);
    // navigate(`/meetq/${userId}`);
  };
  return (
    <>
      <div className="login_wrapper">
        <div className="login_form">
          <h1>Welcome Back</h1>
          <p>Enter your credential to access your account</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
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
                    placeholder="Enter Your password"
                  />
                </div>
              </div>
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary px-4">
                  Login
                </button>
              </div>
              <div className="col-md-12">
                <p style={{ fontSize: "18px" }}>
                  Not a member <Link to="/signup">Signup</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
