import React, { useState } from 'react';
import AuthContext from './AuthContext'
import auth from '../Firebase/Firebase.init'
import { createUserWithEmailAndPassword } from 'firebase/auth';


const AuthProviders = ({ children }) => {
    //    const [user, setUser] = useState(null);
       const [loading, setLoading] = useState(true);


       const CreateUser=( email, password ) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       }




    const authInfo = {
    //    user,
       loading,
       CreateUser,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;