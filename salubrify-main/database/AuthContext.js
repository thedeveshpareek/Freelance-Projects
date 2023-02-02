// @ts-nocheck
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs,getFirestore,collection, query, where, } from "firebase/firestore";
import { auth } from "./firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null); 
    const db = getFirestore();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          //find user in db
          const q = query(
            collection(db, "users"),
            where("uid", "==", user.uid)
          );
          getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setCurrentUser(doc.data());
            });
          });
        });

      }, [db]);

      return (
        <AuthContext.Provider value={{ currentUser }}>
          {children}
        </AuthContext.Provider>
      );
    };