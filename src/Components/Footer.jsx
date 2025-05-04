import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/logoss.svg';

const Footer = () => {
    return (
        <div className="bg-gray-50 pt-16 pb-8 px-5 md:px-20  ">

            {/* Top part */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left lg:w-9/12 lg:mx-auto ">

                {/* Logo + Text */}
                <div>
                    <h2 className="text-3xl font-bold flex flex-col items-center md:items-start gap-4 mb-4">
                        <img src={logo} alt="logo" className="w-40 h-auto" />
                    </h2>
                    <p className="text-gray-600 text-base mb-4">
                        Empowering learners and instructors with seamless online education solutions.
                    </p>
                    <p className="text-gray-600 text-base">
                        Join our platform and start your journey towards knowledge and success today!
                    </p>
                </div>

                {/* For Instructor */}
                <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-4">For Instructor</h3>
                    <ul className="space-y-2 text-gray-600 text-base">
                        <li>Profile</li>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Instructor</li>
                        <li>Dashboard</li>
                    </ul>
                </div>

                {/* For Student */}
                <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-4">For Student</h3>
                    <ul className="space-y-2 text-gray-600 text-base">
                        <li>Profile</li>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Student</li>
                        <li>Dashboard</li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-4">Address</h3>
                    <div className="flex items-center mb-4">
                        <input type="email" placeholder="Enter your email address"
                            className="border border-gray-300 px-3 py-2 rounded-l-md text-sm w-full" />
                        <button className="bg-pink-500 text-white px-4 rounded-r-md text-sm font-semibold">Submit</button>
                    </div>
                    <div className="space-y-3 text-gray-600 text-base">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaMapMarkerAlt className="text-purple-500" /> Mirpur-6, Dhaka,
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaEnvelope className="text-pink-500" /> dreamsmls@example.com
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaPhone className="text-orange-500" /> +19 123-456-7890
                        </p>
                    </div>
                </div>

            </div>

            {/* Bottom part */}
            <div className="lg:w-9/12 lg:mx-auto  border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-base">
                <div className="flex gap-5 mb-3 md:mb-0">
                    <p>Categories</p>
                    <p>Policy</p>
                </div>
                <p>© 2025 Dreams LMS. All rights reserved.</p>
            </div>

        </div>
    );
};

export default Footer;
