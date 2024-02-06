import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase";
import { getStorage } from "firebase/storage";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const imgDb = getStorage(app)

  const register = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const value = { user, register, setUser,imgDb };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
