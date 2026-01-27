import React from "react";
import { Link } from "react-router-dom";
import IconChat from "../img/icon-chat.webp";
import IconMoney from "../img/icon-money.webp";
import IconSecurity from "../img/icon-security.webp";
import BankTree from "../img/bank-tree.webp";
import FeatureItem from "../components/FeatureItem";
import "../style/main.css";

const  Home = () => {

  return (
    <>
      <div className="hero">
          {/* <img className="banktree" src={BankTree} alt="lol" /> */}
        
          <section className="hero-content">
             <p className="subtitle">No fees.</p> 
             <p className="subtitle">No minimum deposit.</p>
             <p className="subtitle">High interest rates.</p>
             <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
      </div>

       <section className="features">
        <div className="row">
          <FeatureItem icon={IconChat} title="You are our #1 priority">
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </FeatureItem>

          <FeatureItem icon={IconMoney} title="More savings means higher rates">
            The more you save with us, the higher your interest rate will be!
          </FeatureItem>

          <FeatureItem icon={IconSecurity} title="Security you can trust">
            We use top of the line encryption to make sure your data and money
            is always safe.
          </FeatureItem>
        </div>
      </section>
    </>
  )
}

export default Home
