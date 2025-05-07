import React from 'react';

import BgImage2 from '../assets/banner.webp'

const AddTutorials = () => {
    return (

        <div className='lg:h-[900px] w-full bg-cover bg-center relative lg:p-45 py-10 lg:-mt-10 ' style={{ backgroundImage: `url(${BgImage2})` }}>

            <div className='w-11/12 lg:w-9/12 mx-auto justify-center bg-base-300 p-10 rounded-2xl shadow-lg'>

                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Add New Tutorial</h2>

                <form className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                    {/* Email */}
                    <input type="email" className="input input-bordered w-full text-lg p-4" placeholder="Your Email" />

                    {/* Name */}
                    <input type="text" className="input input-bordered w-full text-lg p-4" placeholder="Your Name" />

                    {/* Language */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Language</span>
                        </label>
                        <select name='language' defaultValue="" className="select select-bordered w-full text-lg p-4" required>
                            <option disabled value="">Select A Language</option>
                            <option>English</option>
                            <option>Japanese</option>
                            <option>French</option>
                            <option>Spanish</option>
                            <option>German</option>
                            <option>Italian</option>
                            <option>Chinese</option>
                            <option>Arabic</option>
                            <option>Portuguese</option>
                        </select>
                    </div>

                    {/* Image */}
                    <input type="text" className="input input-bordered w-full text-lg p-4" placeholder="Image URL" />

                    {/* Price */}
                    <input type="number" className="input input-bordered w-full text-lg p-4" placeholder="Price" />

                    {/* Review */}
                    <input type="text" min={0} max={5} step="0.1" className="input input-bordered w-full text-lg p-4" placeholder="Review (0 to 5)" />

                    {/* Description */}
                    <textarea className="textarea textarea-bordered w-full text-lg p-4 md:col-span-2" rows="4" placeholder="Description"></textarea>

                </form>

                <div className="flex justify-center mt-10">
                    <button className='btn btn-lg btn-warning px-10 text-lg'>Submit</button>
                </div>

            </div>

        </div>

    );
};

export default AddTutorials;
