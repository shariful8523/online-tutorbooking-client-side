import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const loadData = useLoaderData();

    const { _id, language, userName, image, price, review, description } = loadData;

    console.log(loadData)
    return (

        <div className='w-7/12 mx-auto justify-center mt-20 mb-20'>
            <div className='  flex '>

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

                     <button className="btn btn-outline btn-primary mt-5">Book</button>

                </div>
            </div>
        </div>



    );
};

export default ViewDetails;