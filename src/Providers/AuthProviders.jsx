import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext'
import auth from '../Firebase/Firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';



const AuthProviders = ({ children }) => {
       const [user, setUser] = useState(null);
       const [loading, setLoading] = useState(true);


       const CreateUser=( email, password ) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       }

       const logInUser =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       }
           
       const googleProvider = new GoogleAuthProvider();
       const GoogleLogin = () => {
              setLoading(true)
              return signInWithPopup(auth, googleProvider)
       }

       const LogOut = () => {
             setLoading(true)
             return signOut(auth)
       }


       useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
          });

          return () => unSubscribe();

       },[]);
       

    const authInfo = {
       user,
       loading,
       CreateUser,
       logInUser,
       LogOut,
       GoogleLogin
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;