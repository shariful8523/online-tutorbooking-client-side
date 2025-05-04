import { NavLink } from "react-router-dom";
import logo from '../assets/logoss.svg'

const Navbar = () => {

    const link = <>
        <li> <NavLink to="/"> Home </NavLink> </li>
        <li> <NavLink to="/find-tutors"> Find tutors</NavLink> </li>
        <li> <NavLink to="/add-tutorials"> Add Tutorials</NavLink> </li>
        <li> <NavLink to="/my-tutorials"> My Tutorials</NavLink> </li>
        <li> <NavLink to="/booked-tutors"> My booked tutors</NavLink> </li>
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
                <div className="">
                    <a className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
