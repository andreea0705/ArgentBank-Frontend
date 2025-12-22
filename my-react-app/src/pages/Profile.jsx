import React from "react";


const Profile =() => {
    return (
         <main classname="main bg-dark">
      <div classname="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button classname="edit-button">Edit Name</button>
      </div>
      <h2 classname="sr-only">Accounts</h2>
      <section classname="account">
        <div classname="account-content-wrapper">
          <h3 classname="account-title">Argent Bank Checking (x8349)</h3>
          <p classname="account-amount">$2,082.79</p>
          <p classname="account-amount-description">Available Balance</p>
        </div>
        <div classname="account-content-wrapper cta">
          <button classname="transaction-button">View transactions</button>
        </div>
      </section>
      <section classname="account">
        <div classname="account-content-wrapper">
          <h3 classname="account-title">Argent Bank Savings (x6712)</h3>
          <p classname="account-amount">$10,928.42</p>
          <p classname="account-amount-description">Available Balance</p>
        </div>
        <div classname="account-content-wrapper cta">
          <button classname="transaction-button">View transactions</button>
        </div>
      </section>
      <section classname="account">
        <div classname="account-content-wrapper">
          <h3 classname="account-title">Argent Bank Credit Card (x8349)</h3>
          <p classname="account-amount">$184.30</p>
          <p classname="account-amount-description">Current Balance</p>
        </div>
        <div classname="account-content-wrapper cta">
          <button classname="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    )
}

export default Profile;