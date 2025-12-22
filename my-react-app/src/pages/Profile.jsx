import React, { useEffect, useState } from "react";
import "../style/profile.css";
import Account from "../components/account";
import { useSelector, useDispatch } from "react-redux";
import { setGetProfile } from "../features/profileSlice";
//import ModalEditUsername from "../components/ModalEditUsername";

const Profile = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.token);
  const [toggleEditUsername, setToggleEditUsername] = useState(false);

  async function fetchData() {
    try {
      const data = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
        body: JSON.stringify({
          status: 0,
          message: "string",
          body: {
            id: "string",
            email: "string",
          },
        }),
      });

      if (data.status === 200) {
        const responseData = await data.json();
        dispatch(setGetProfile({ data: responseData }));
      } else if (data.status === 401) {
        console.log(
          "Erreur d'authentification : Identifiant ou Mot de passe incorrect"
        );
      } else {
        console.log("Connexion Impossible : Erreur inconnue");
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  });

  const handleEditUsername = () => {
    setToggleEditUsername(!toggleEditUsername);
  };

  return (
    <>
      <section className="profile">
        <article className="user">
          <h1>
            Welcome back
            <br />
            {dataUser.firstName + " " + dataUser.lastName + " !"}
          </h1>
          <button onClick={handleEditUsername} className="edit-button">
            {!toggleEditUsername ? "Edit " : "Close"}
          </button>
          {toggleEditUsername && (
            <ModalEditUsername onSubmit={handleEditUsername} />
          )}
        </article>
        <h2 className="account-title">Accounts</h2>
        <Account
          state={{
            accountNumber: "Argent Bank Checking (x8349)",
            balance: "$2,082.79",
            status: "Available Balance",
          }}
        />
        <Account
          state={{
            accountNumber: "Argent Bank Savings (x6712)",
            balance: "$10,928.42",
            status: "Available Balance",
          }}
        />
        <Account
          state={{
            accountNumber: "Argent Bank Credit Card (x8349)",
            balance: "$184.30",
            status: "Current Balance",
          }}
        />
      </section>
    </>
  );
};

export default Profile;
