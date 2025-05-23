import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../Providers/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
 
const Register = () => {

    const { CreateUser , LogOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handelRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Password validation
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters long!");
        }

        CreateUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // Update user profile with name and photo
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Registration Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });


                        LogOut(auth)
                        .then(() => {
                            
                        })
 

                        event.target.reset(); // Reset form

                        navigate('/login')
                    })
                    .catch(error => {
                        console.error(error);
                        toast.error("Profile update failed!");
                    });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            });
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <form onSubmit={handelRegister} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Photo URL Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="photo">Photo URL</label>
                    <input
                        type="text"
                        id="photo"
                        name="photo"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter photo URL"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        * Password must be at least 6 characters long.
                    </p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Register
                </button>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-4 text-gray-400">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Google Login */}
                <button
                    type="button"
                    className="flex items-center justify-center gap-3 w-full border border-gray-400 py-2 rounded-md hover:bg-gray-100 transition"
                >
                    <FcGoogle size={24} /> Continue with Google
                </button>

                {/* Sign In Redirect */}
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Sign In
                    </Link>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;
