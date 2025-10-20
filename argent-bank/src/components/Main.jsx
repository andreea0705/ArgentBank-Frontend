import React from "react";
import { Link } from "react-router-dom";
import IconChat from "../img/icon-chat.webp";
import IconMoney from "../img/icon-money.webp";
import IconSecurity from "../img/icon-security.webp";
import BankTree from "../img/bank.webp";
import Arrow from "../img/svg/arrow.svg";
import "../style/main.css";

const Main = () => {
  return (
    <>
      <main>
        <div className="hero">
          <img className="banktree" src={BankTree} alt="lol" />
          <p className="little-slogan">SAVE & MANAGE YOUR MONEY</p>
          <h1 className="slogan">
            Banking <br />
            You Want <br />
            To Use
          </h1>
          <Link to="/login">
            <div className="hero-content">
              <p>JOIN 5M ARGENTBANK CLIENTS</p>
              <img className="arrow" src={Arrow} alt="arrow" />
            </div>
          </Link>
        </div>
        <section className="features">
          <div className="grey">
            <h2 className="features-title">Features</h2>
          </div>
          <div className="row">
            <div className="feature-item">
              <img src={IconChat} alt="Chat Icon" className="feature-icon" />
              <h3 className="feature-item-title">You are our #1 priority</h3>
              <p>
                Need to talk to a representative? You can get in touch through
                our 24/7 chat or through a phone call in less than 5 minutes.
              </p>
            </div>
            <div className="feature-item">
              <img src={IconMoney} alt="Chat Icon" className="feature-icon" />
              <h3 className="feature-item-title">
                More savings means higher rates
              </h3>
              <p>
                The more you save with us, the higher your interest rate will
                be!
              </p>
            </div>
            <div className="feature-item">
              <img
                src={IconSecurity}
                alt="Chat Icon"
                className="feature-icon"
              />
              <h3 className="feature-item-title">Security you can trust</h3>
              <p>
                We use top of the line encryption to make sure your data and
                money is always safe.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
