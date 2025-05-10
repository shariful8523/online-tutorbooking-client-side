import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 

import England from '../assets/england.jpg';
import portugal from '../assets/portugal.png';
import japan from '../assets/FJapan.svg.png';
import china from '../assets/china.webp';
import Arabic from '../assets/Saudi-Arabia.webp';
import spanish from '../assets/spanish.png';
import italic from '../assets/itali.webp';
import german from '../assets/Germany.svg.png';
import france from '../assets/franch.webp';


const CategoryCard = () => {

    return (
        <div className='mt-40  md:w-11/12 mx-auto '>

            <p className='text-5xl font-bold mb-20 text-center'>All Categories</p>

            <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-6 mb-20">

                <Card img={England} title="English Tutors" />
                <Card img={portugal} title="Portuguese Tutors" />
                <Card img={japan} title="Japanese Tutors" />
                <Card img={Arabic} title="Arabic Tutors" />
                <Card img={german} title="German Tutors" />
                <Card img={china} title="Chinese Tutors" />
                <Card img={italic} title="Italian Tutors" />
                <Card img={spanish} title="Spanish Tutors" />
                <Card img={france} title="French Tutors" />

            </div>

        </div>
    );
};

// Reusable Card component
const Card = ({ img, title }) => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        const language = title.split(" ")[0]; 
        navigate(`/Tutors/${language}`);
    }

    return (
        <div 
            onClick={handleClick} 
            className='flex gap-5 items-center p-5   border border-red-200 hover:shadow-lg transition cursor-pointer'
        >
            <img className='lg:w-20 w-10 ' src={img} alt={title} />
            <h1 className=' lg:text-2xl text-xl font-bold flex-1'>{title}</h1>
            <span className=' lg:text-4xl text-red-400 '> <FaArrowRight /> </span>
        </div>
    );
};

export default CategoryCard;
