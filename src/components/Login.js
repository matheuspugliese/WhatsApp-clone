import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <img
          src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2018/11/kisspng-computer-icons-whatsapp-whatsapp-logo-5aeca11081bc49-2881449515254571685314.png?resize=696%2C696&ssl=1"
          alt=""
        />
        <h1>Sign in to WhatsApp</h1>
        <Link to="/loggedin">
          <button className="login-button">Sign in</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
