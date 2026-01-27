import React, { useState } from "react";
import "../style/main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignIn } from "../features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status === 200) {
        const dataUser = await response.json();
        dispatch(setSignIn({ dataUser }));
        localStorage.setItem("token", dataUser.body?.token);

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
          localStorage.setItem("email", email);
        } else {
          localStorage.removeItem("email");
        }

        navigate("/profile");
      } else {
        localStorage.removeItem("token");
        setErrorMsg("Erreur dans l’identifiant ou le mot de passe");
        console.log(
          "Connexion Impossible : Erreur Identifiant ou Mot de passe"
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="email"
                id="username"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/*<div className="input-show-password">
               <label htmlFor="show-password">Show Password</label>
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </div>*/}

            <button onClick={handleSubmit} className="sign-in-button">
              Sign In
            </button>
            <div className="erreur-msg">{errorMsg}</div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
