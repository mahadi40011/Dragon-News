import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    user,
    setUser,
    createUser,
    loginUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
