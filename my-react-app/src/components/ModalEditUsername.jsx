import React, { useState} from "react";
import "../style/modaleditusername.css";
import { useDispatch, useSelector } from "react-redux";
import { setNewUserName } from "../features/profileSlice";

const ModalEditUsername = ({ onSubmit }) => {
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  // console.log(username);
  const token = useSelector((state) => state.auth.token);
  const [newUsername, setNewUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonClass, setButtonClass] = useState("edit-save");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (newUsername === "") {
        setErrorMsg("Le champ ne peut pas être vide");
        setButtonClass("edit-save edit-save-error");
      } else {
        setErrorMsg(""); // Efface le message d'erreur si le champ n'est pas vide
        setButtonClass("edit-save");

        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: newUsername,
            }),
          }
        );

        if (response.status === 200) {
          const responseData = await response.json();
          dispatch(setNewUserName({ response: responseData }));
          onSubmit(); // ferme le modal
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="editName-content">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label for="userName">Username</label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>
        <div className="input-grey">
          <label for="firstname">First Name</label>
          <input disabled type="text" value={firstName} />
        </div>
        <div className="input-grey">
          <label for="lastname">Last Name</label>

          <input disabled type="text" value={lastName} />
        </div>
        <div className="error-msg">{errorMsg}</div>
        <button className={buttonClass} type="submit">
          Save
        </button>
      </form>
    </section>
  );
};

export default ModalEditUsername;
