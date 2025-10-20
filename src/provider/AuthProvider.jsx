import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authData = {
    user,
    setUser,
    createUser,
    loginUser,
  };


  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
