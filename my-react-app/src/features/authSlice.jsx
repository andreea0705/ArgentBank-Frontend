import { createSlice } from "@reduxjs/toolkit";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token") || null;
};

const initialState = {
  token: getTokenFromLocalStorage(),
  dataUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignIn(state, { payload }) {
      state.token = payload.dataUser.body?.token;
      state.dataUser = payload.dataUser; // Stockez les données de l'utilisateur lors de la connexion
    },

    setSignOut: (state) => {
      state.token = null;
      state.dataUser = null; // Réinitialisez également les données de l'utilisateur lors de la déconnexion
    },
  },
});

export const { setSignIn } = authSlice.actions;
export const { setSignOut } = authSlice.actions;
export default authSlice.reducer;
