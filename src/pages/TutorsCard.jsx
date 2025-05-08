import React from 'react';

const TutorsCard = ({ Tutor }) => {
    const { _id, language, userName, image, price, review, description } = Tutor;

    return (
        <div className="w-80 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-3">
        
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

               

             
                <div className="flex gap-1  text-base">
                    {'⭐'.repeat(Math.floor(review || 0))} 
                    {'☆'.repeat(5 - Math.floor(review || 0))}

                    <div className='ml-23'>
                        <h1>Price:${price}</h1>
                    </div>
                </div>

              
                <button className="w-full border-2 border-indigo-500 text-indigo-500 font-semibold py-2 rounded-full hover:bg-indigo-500 hover:text-white transition">
                   Details
                </button>
            </div>
        </div>
    );
};

export default TutorsCard;
