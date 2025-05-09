import React, { useContext } from 'react';
import AuthContext from '../Providers/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading) {
      return (
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner text-error w-[50px]"></span>
            </div>
        );
    }

    if(user && user?.email) {
        return children;
    }

    return <Navigate to="/login" />
    
};

export default PrivateRouter;