import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewCategory = () => {
    const { language } = useParams();
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tutors/${language}`)
            .then(res => res.json())
            .then(data => setTutors(data));
    }, [language]);

    return (
        <div className='w-10/12 mx-auto mt-20'>
            <h2 className='text-4xl font-bold mb-10 text-center'>All {language} Tutors</h2>

            {
                tutors.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            tutors.map(tutor => {
                                const { _id, image, userName, description, review, price, language } = tutor;

                                return (
                                    <div key={_id} className="w-80 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-3">

                                        <div className="bg-gray-100 rounded-xl p-2 relative">
                                            <img
                                                src={image}
                                                alt={userName}
                                                className="w-full h-44 object-cover rounded-lg"
                                            />
                                        </div>

                                        <div className="mt-4 space-y-2">

                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <h4 className="font-semibold text-lg">{userName}</h4>
                                                    <p className="text-xl text-gray-500">Instructor</p>
                                                </div>
                                            </div>

                                            <h3 className="font-semibold text-gray-800 text-2xl">
                                                {language}
                                            </h3>

                                            <h3 className="font-semibold text-gray-800 text-sm">
                                                {description?.slice(0, 40) || 'Tutorial'}...
                                            </h3>

                                            <div className="flex gap-1 text-base items-center">
                                                {'⭐'.repeat(Math.floor(review || 0))}
                                                {'☆'.repeat(5 - Math.floor(review || 0))}
                                                <div className='ml-auto'>
                                                    <h1 className="font-semibold text-indigo-600">Price: ${price}</h1>
                                                </div>
                                            </div>

                                            <button className="w-full border-2 border-indigo-500 text-indigo-500 font-semibold py-2 rounded-full hover:bg-indigo-500 hover:text-white transition">
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : <p className='text-center text-2xl font-medium'>No tutors found for {language}</p>
            }
        </div>
    );
};

export default ViewCategory;
