import React, { useState } from 'react';
import AuthContext from './AuthContext'
import auth from '../Firebase/Firebase.init'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const AuthProviders = ({ children }) => {
    //    const [user, setUser] = useState(null);
       const [loading, setLoading] = useState(true);


       const CreateUser=( email, password ) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       }

       const logInUser =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       }




    const authInfo = {
    //    user,
       loading,
       CreateUser,
       logInUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;