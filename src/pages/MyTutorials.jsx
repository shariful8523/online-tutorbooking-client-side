import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Providers/AuthContext';
import BgImage2 from '../assets/banner.webp'


const MyTutorials = () => {

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [tutorss, setTutorss] = useState([]);


    useEffect(() => {
        if (user) {
            setLoading(true);
            fetch(`http://localhost:5000/tutors?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setTutorss(data);
                    setLoading(false);

                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }
        else {
            setLoading(false);
        }




    }, [user]);

    console.log(tutorss)


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="text-xl font-semibold">Loading...</span>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center p-5"
            style={{ backgroundImage: `url(${BgImage2})` }}
        >
            {tutorss.length > 0 ? (
                <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-20">
                    {tutorss.map((item) => {
                        const { _id, image, userName, description, review, price, language } = item;

                        return (
                            <div
                                key={_id}
                                className="w-80 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4"
                            >
                                <div className="bg-gray-100 rounded-xl p-2">
                                    <img
                                        src={image}
                                        alt={userName}
                                        className="w-full h-44 object-cover rounded-lg"
                                    />
                                </div>

                                <div className="mt-4 space-y-2">
                                    <div>
                                        <h4 className="font-semibold text-lg">{userName}</h4>
                                    </div>

                                    <h3 className="font-semibold text-indigo-600 text-lg">{language}</h3>

                                    <p className="text-gray-700 text-sm">{description}</p>

                                    <div className="flex items-center gap-1 text-base">
                                        {'⭐'.repeat(Math.floor(review || 0))}
                                        {'☆'.repeat(5 - Math.floor(review || 0))}
                                        <div className="ml-auto">
                                            <h1 className="font-semibold text-indigo-600">Price: ${price}</h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="w-full border-2 border-indigo-500 text-indigo-500 font-semibold py-2 rounded-full hover:bg-indigo-500 hover:text-white transition">
                                            Update
                                        </button>
                                        <button className="w-full border-2 border-green-500 text-green-500 font-semibold py-2 rounded-full hover:bg-green-500 hover:text-white transition">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h1 className="text-center text-2xl font-semibold">No Tutorial Added</h1>
            )}
        </div>
    );

};

export default MyTutorials;