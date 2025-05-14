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



        {
            user &&
            <>

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
            </>
        }


        <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>
                About
            </NavLink>
        </li>
    </>


    return (
        <div className="  w-full bg-base-200 sticky top-0 z-50 shadow-sm">
            <div className="navbar max-w-7xl mx-auto flex justify-between">
                {/* Logo & Mobile Menu */}
                <div className="flex items-center">
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <img className="w-32 md:w-40" src={logo} alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {link}
                    </ul>
                </div>

                {/* Button */}
                <div className=" space-x-5 ">

                    {
                        user ?
                            (<div className="flex items-center gap-3">

                                <div className="dropdown hidden md:block">
                                    <div tabIndex={0}  >
                                        <img className='md:w-12 w-8 lg:w-13 lg:h-13 rounded-full' referrerPolicy='no-referrer' src={user.photoURL} alt="" />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-green-500 rounded-box z-[1] w-24 md:w-48 mt-1  p-2 shadow">
                                        <li className='md:p-2 text-white md:text-xl md:font-medium'>{user.displayName}</li>
                                    </ul>
                                </div>
                              
                                <button onClick={handelLogOut} className="btn btn-sm btn-error">Logout</button>
                            </div>)

                            :

                            (<>
                                <NavLink to={'/login'} className="btn btn-primary">Login</NavLink>
                                <NavLink to={'/register'} className="btn btn-primary">Register</NavLink>
                            </>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
