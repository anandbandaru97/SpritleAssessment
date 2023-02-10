import React from "react";
import { useNavigate } from "react-router-dom";

// css
import "./index.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-main-container">
      <div className="color-div">
        <h2>Welcome To</h2>
        <p>You tell, I do</p>
      </div>
      <div className="home-buttons">
        <div className="login-container-home">
          <h2>Already Have an Account</h2>
          <button onClick={() => navigate("/login")}>Login</button>
          <div className="signup-container-home">
            <h2>Don't Have an Account ?</h2>
            <button onClick={() => navigate("/signup")}>signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}
