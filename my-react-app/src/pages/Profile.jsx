import React, { useEffect, useState } from "react";
import "../style/profile.css";
import Account from "../components/account";
import { useSelector, useDispatch } from "react-redux";
import { setGetProfile } from "../features/profileSlice";
import ModalEditUsername from "../components/ModalEditUsername";

const Profile = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.token);
  const [toggleEditUsername, setToggleEditUsername] = useState(false);

  async function fetchData() {
    try {
      const data = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
          "Content-Type": "application/json",
        },
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
  }, []); //Avec [], fetchData() ne s’exécute qu’une seule fois, au montage du composant

  const handleEditUsername = () => {
    setToggleEditUsername(!toggleEditUsername);
  };

  // Nom affiché : prénom + nom au début, puis username si modifié
  const displayName = dataUser.userName
    ? dataUser.userName
    : `${dataUser.firstName} ${dataUser.lastName}`;


  return (
    <>
      <section className="profile">
        <article className="user">
          <h1>
            Welcome back
            <br />
            {displayName + " !"}
          </h1>
          <button onClick={handleEditUsername} className="edit-button">
            {!toggleEditUsername ? "Edit Name " : "Close"}
          </button>
          {toggleEditUsername && (
            <ModalEditUsername onSubmit={handleEditUsername} />
          )}
        </article>
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
