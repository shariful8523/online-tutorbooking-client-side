
import Microsoft from '../assets/trust-image/Microsoft.avif'
import Amazon from '../assets/trust-image/Amazon.webp'
import Github from '../assets/trust-image/GitHub.jpg'
import Instagram from '../assets/trust-image/Instagram.jpeg'
import Apple from '../assets/trust-image/apple_logo.jpeg'
import LinkedIn from '../assets/trust-image/LinkedIn.png'

import StackOverflow from '../assets/trust-image/stackoverflow-1.png'
import Google from '../assets/trust-image/Google.jpg'
import Facebook from '../assets/trust-image/Facebook.png'
import YouTube from '../assets/trust-image/YouTube.jpg'





const logos = [Microsoft, Amazon, Github, Instagram, Apple, LinkedIn, 
     StackOverflow, Google, Facebook,
    YouTube

];


const Trust = () => {
    return (
        <div className="w-11/12 lg:w-7/12 mx-auto justify-center">
            <h1 className='text-red-500 font-semibold text-2xl text-center mb-4'>Trusted By</h1>
            <p className='text-3xl md:text-5xl font-bold text-center text-[#002058] mb-20'>
                500+ Leading Universities And Companies
            </p>


            <div className="overflow-hidden relative  ">
                <div className="flex animate-slide-rtl whitespace-nowrap">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="Logo"
                            className="h-16 w-auto mx-6 inline-block"
                        />
                    ))}
                    {/* Duplicate logos for seamless loop */}
                    {logos.map((logo, index) => (
                        <img
                            key={index + logos.length}
                            src={logo}
                            alt="Logo"
                            className="h-16 w-auto mx-6 inline-block"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trust;
