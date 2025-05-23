import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Providers/AuthContext';
import Swal from 'sweetalert2';



const Login = () => {
    const navigate = useNavigate();


    const { logInUser, GoogleLogin } = useContext(AuthContext);

    const handellogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);

        logInUser(email, password)
            .then((result) => {
                console.log(result);

                Swal.fire({
                    title: 'Success!',
                    text: 'login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });




                navigate('/')


            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });

            });
    }

    const handelGoogle = () => {

        GoogleLogin()
            .then((result) => {
                console.log(result)
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });

                  navigate('/')
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 lg:-mt-40">
            <form onSubmit={handellogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email" name='email' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input type="password" id="password" name='password' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Sign In</button>

                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-4 text-gray-400">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <button onClick={handelGoogle} type="button" className="flex items-center justify-center gap-3 w-full border border-gray-400 py-2 rounded-md hover:bg-gray-100 transition">
                    <FcGoogle size={24} /> Continue with Google
                </button>

                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
            </form>

        </div>
    );
};

export default Login;