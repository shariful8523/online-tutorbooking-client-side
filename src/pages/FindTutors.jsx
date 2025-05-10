import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const FindTutors = () => {
  const [view, setView] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/tutor')
      .then(res => res.json())
      .then(data => setView(data))
  }, []);

  const filteredTutors = view.filter(tutor =>
    tutor.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4"> 
      
      
      <div className="flex justify-center mt-10 mb-10">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search by language..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      
      <div className='max-w-7xl mx-auto mt-10 mb-20'>
        {
          filteredTutors.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {
                filteredTutors.map(tutor => {
                  const { _id, image, userName, description, review, price, language } = tutor;

                  return (
                    <div key={_id} className="w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-3">
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

                        <div className="flex gap-1 text-base items-center mb-5">
                          {'⭐'.repeat(Math.floor(review || 0))}
                          {'☆'.repeat(5 - Math.floor(review || 0))}
                          <div className='ml-auto'>
                            <h1 className="font-semibold text-indigo-600">Price: ${price}</h1>
                          </div>
                        </div>

                        <Link
                          className="border-2 border-indigo-500 text-indigo-500 font-semibold py-2 rounded-full hover:bg-indigo-500 hover:text-white transition block text-center"
                          to={`/viewDetails/${_id}`}
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          ) : <p className='text-center text-2xl font-medium'>No tutors found</p>
        }
      </div>
    </div>
  );
};

export default FindTutors;
