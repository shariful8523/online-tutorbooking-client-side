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

        <div className='w-7/12 mx-auto justify-center mt-20 mb-20'>
            <div className='  flex border  border-amber-50 bg-base-300 ' >

                <div>
                    <img className='w-[500px]' src={image} alt="" />
                </div>


                <div className='p-10 text-2xl  '>
                    <h1 className='font-bold'>Name: {userName}</h1>
                    <p className='mt-3 font-bold'>Language: {language}</p>

                    <p className='mt-3'>Description: {description}</p>


                    <section className=' flex gap-14 mt-20'>
                        <h1>Price: $ {price}</h1>
                        <h1>Review: {review}</h1>
                    </section>

                    <button onClick={handleBook} className="btn btn-outline btn-primary mt-5">Book</button>

                </div>
            </div>
        </div>



    );
};

export default ViewDetails;