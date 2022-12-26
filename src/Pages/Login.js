import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Login = ({ setData }) => {
  const [responseBody, setResponseBody] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e?.preventDefault();
    fetch("https://apptesting.docsumo.com/api/v1/eevee/login/", {
      method: "POST",
      body: JSON.stringify(responseBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        setError("");
        const inputs = document.querySelectorAll(".email, .password");
        inputs.forEach((input) => {
          input.value = "";
        });
        return response.json();
      })
      .then((json) => {
        console.log(json);
        if (json?.status === "success") {
          setData(json);
          navigate("/hello");
        }
        if (json?.status === "fail") {
          setError(json?.error);
        }
      })
      .catch((err) => console.log(error));
  };

  return (
    <div className="login__container">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <span className="login__text">Login To your Docsumo Account </span>
        <br />
        <span className="error__text">{error != "" && error}</span>
        <div className="email__wrapper">
          <h4>Work Email </h4>
          <input
            type="text"
            className="email"
            name="email"
            placeholder="janedoe@abc.com"
            onChange={(e) => {
              setResponseBody({ ...responseBody, email: e?.target?.value });
            }}
          />
        </div>
        <div className="password__wrapper">
          <h4>Password </h4>
          <input
            type="password"
            className="password"
            name="password"
            placeholder="Enter password here..."
            onChange={(e) => {
              setResponseBody({
                ...responseBody,
                password: e?.target?.value,
              });
            }}
          />
          <p className="forgot_password">Forgot Password?</p>
        </div>
        <div className="loginButton__wrapper">
          <button type="submit">Login </button>
          <h4>
            Dont have anaccount? <span>&nbsp;Sign Up</span>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default Login;
