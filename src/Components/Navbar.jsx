import { NavLink } from "react-router-dom";
import logo from '../assets/logoss.svg'
import { useContext } from "react";
import AuthContext from "../Providers/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handelLogOut = () => {
        LogOut()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'LogOut Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            })
    }

    const link = <>
        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>
                Home
            </NavLink>
        </li>
        {user && <>
            <li>
                <NavLink to="/findTutors" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>
                    Find tutors
                </NavLink>
            </li>
            <li>
                <NavLink to="/addTutorials" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>
                    Add Tutorials
                </NavLink>
            </li>
            <li>
                <NavLink to="/myTutorials" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>
                    My Tutorials
                </NavLink>
            </li>
            <li>
                <NavLink to="/bookedTutors" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>
                    My booked tutors
                </NavLink>
            </li>
        </>}
        <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>
                About
            </NavLink>
        </li>
    </>

    return (
        <div className="w-full bg-base-200 sticky top-0 z-50 shadow-sm">
            {/* Mobile Navbar */}
            <div className="flex items-center justify-between lg:hidden px-4 py-2">
                {/* Hamburger menu left */}
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}

                        {/* Mobile login/register or logout */}
                        <div className="mt-2">
                            {user ? (
                                <button onClick={handelLogOut} className="btn btn-sm btn-error w-full">Logout</button>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <NavLink to={'/login'} className="btn btn-primary w-full text-center">Login</NavLink>
                                    <NavLink to={'/register'} className="btn btn-primary w-full text-center">Register</NavLink>
                                </div>
                            )}
                        </div>
                    </ul>
                </div>

                {/* Logo right */}
                <img className="w-32" src={logo} alt="Logo" />
            </div>

            {/* Desktop Navbar */}
            <div className="hidden lg:flex max-w-7xl mx-auto justify-between items-center px-4 py-2">
                {/* Logo left */}
                <img className="w-40" src={logo} alt="Logo" />

                {/* Menu center */}
                <ul className="menu menu-horizontal px-1 items-center">
                    {link}
                </ul>

                {/* User buttons right */}
                <div className="flex space-x-5 items-center">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="dropdown">
                                <div tabIndex={0}>
                                    <img className='w-12 h-12 rounded-full' referrerPolicy='no-referrer' src={user.photoURL} alt="" />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-green-500 rounded-box z-[1] w-48 mt-1 p-2 shadow">
                                    <li className='p-2 text-white text-xl font-medium'>{user.displayName}</li>
                                </ul>
                            </div>
                            <button onClick={handelLogOut} className="btn btn-sm btn-error">Logout</button>
                        </div>
                    ) : (
                        <>
                            <NavLink to={'/login'} className="btn btn-primary">Login</NavLink>
                            <NavLink to={'/register'} className="btn btn-primary">Register</NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Navbar;
