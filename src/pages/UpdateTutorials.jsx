import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BgImage2 from '../assets/banner.webp'
import AuthContext from '../Providers/AuthContext';
import Swal from 'sweetalert2'; 

const UpdateTutorials = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams(); 
    const [tutorial, setTutorial] = useState(null);

    // Load data for the specific tutorial
    useEffect(() => {
        fetch(`http://localhost:5000/tutor/${id}`) 
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, [id]);

    // Handle form update
    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const review = form.review.value;
        const description = form.description.value;

        const formData = {
            image, language, price, review, description
        };

        // Send updated data to the server
        fetch(`http://localhost:5000/tutor/${id}`, { 
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success && data.modified) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tutorials Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                } else if (data.success && !data.modified) {
                    Swal.fire({
                        title: 'No Changes!',
                        text: 'You didn\'t change anything.',
                        icon: 'info',
                        confirmButtonText: 'Okay'
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Product not found!',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                    });
                }
            });
    };

    // Show loading spinner while data is being fetched
    if (!tutorial) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner text-error w-[50px]"></span>
            </div>
        );
    }

    return (
        <div>
            <div className='lg:h-[900px] w-full bg-cover bg-center relative lg:p-45 py-10 lg:-mt-10' style={{ backgroundImage: `url(${BgImage2})` }}>
                <div className='w-11/12 lg:w-9/12 mx-auto justify-center bg-base-300 p-10 rounded-2xl shadow-lg'>
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Update Tutorial</h2>
                    <form onSubmit={handleUpdate} className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <input type="email" name='userEmail' value={user?.email} readOnly className="input input-bordered w-full text-lg p-4" placeholder="User Email" />
                        <input type="text" name='userName' value={user?.displayName} readOnly className="input input-bordered w-full text-lg p-4" placeholder="User Name" />

                        <div className="form-control w-full">
                            <label className="label"></label>
                            <select name='language' defaultValue={tutorial.language} className="select select-bordered w-full" required>
                                <option disabled value="default">Select A Language</option>
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

                        <input type="text" name="image" defaultValue={tutorial.image} className="input input-bordered w-full text-lg p-4" placeholder="Image URL" />
                        <input type="number" name="price" defaultValue={tutorial.price} className="input input-bordered w-full text-lg p-4" placeholder="Price" />
                        <input type="number" name="review" defaultValue={tutorial.review} min={0} max={5} step="0.1" className="input input-bordered w-full text-lg p-4" placeholder="Review (0 to 5)" />
                        <textarea name="description" defaultValue={tutorial.description} className="textarea textarea-bordered w-full text-lg p-4 md:col-span-2" rows="4" placeholder="Description"></textarea>

                        <div className="flex justify-center mt-10 md:col-span-2">
                            <button type="submit" className='btn btn-lg btn-warning px-10 text-lg'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTutorials;
