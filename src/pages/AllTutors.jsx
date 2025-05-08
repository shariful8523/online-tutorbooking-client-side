import React, { useEffect, useState } from 'react';
import TutorsCard from './TutorsCard';

const AllTutors = () => {
    const [data, setData] =useState([]);

           
    const getData = async () => {
        const response = await fetch('http://localhost:5000/tutors')
        const Tutors = await response.json();
        setData(Tutors);
    }
 
    useEffect(()=>{
        getData();
    },[])
    
   

    return (
        <div className=' w-8/12 mx-auto justify-center  grid grid-cols-3 gap-10 mb-20   ' >
            {
               data.map(Tutor => <TutorsCard key={Tutor._id} Tutor={Tutor} ></TutorsCard>) 
            }
        </div>
    );
};

export default AllTutors;