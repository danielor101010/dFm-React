import React, { useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a GET request to check if the user exists
      const response = await axios.post(`http://localhost:5000/login`, {
        email: email,
      });
      // If the user exists, do something
      alert("YAY!");
      // For example, redirect the user to the dashboard
    } catch (error) {
      console.log(error);
      setRedirectToSignUp(true);
      setTimeout(() => {
        history.push("/SignUp");
      }, 2500);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div className="client-register">
          <h1>Login</h1>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" name="button">
            Submit
          </button>
          <p id="alert-message" style={{ display: redirectToSignUp ? "block" : "none", color: "red" }}>
            Ho, seems like you haven't signed up yet
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
