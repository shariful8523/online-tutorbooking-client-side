import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthContext from '../Providers/AuthContext';

const ViewDetails = () => {

    const { user, loading } = useContext(AuthContext);

    const loadData = useLoaderData();

    const { _id, language, userName, image, price, review, description } = loadData;

    const handleBook = () => {
        const bookedItem = {
            tutorialId: _id,
            language,
            userName,
            userEmail: user?.email,
            image,
            price,
            review,
            description,
            bookingTime: new Date()
        };

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookedItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Booked!',
                        text: 'Tutorial has been added to your bookings.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner text-error w-[50px]"></span>
            </div>
        );
    }

    return (
        <div className='w-full sm:w-10/12 md:w-7/12 mx-auto justify-center mt-20 mb-20'>
            <div className='flex flex-col sm:flex-row gap-8 border border-amber-50 bg-base-300 p-5 rounded-xl'>

                <div className='sm:w-1/2'>
                    <img className='w-full max-w-full h-auto object-cover rounded-lg' src={image} alt="" />
                </div>

                <div className='sm:w-1/2 text-xl space-y-4'>
                    <h1 className='font-bold text-2xl'>Name: {userName}</h1>
                    <p className='font-bold text-lg'>Language: {language}</p>
                    <p className='text-gray-700'>{description}</p>

                    <section className='flex gap-14 mt-5'>
                        <h1 className='text-lg font-semibold'>Price: $ {price}</h1>
                        <h1 className='text-lg font-semibold'>Review: {review}</h1>
                    </section>

                    <button onClick={handleBook} className="btn btn-outline btn-primary mt-5 w-full sm:w-auto">Book</button>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
