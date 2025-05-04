import { FaStar } from 'react-icons/fa6';
import BgImage from '../assets/banner.webp';
import photo from '../assets/object.webp';
import penciling from '../assets/pencile.png';
import second from '../assets/man-1.png';
import third from '../assets/man-2.png';
import certificate from '../assets/certificate.png';
import { MdSearch } from 'react-icons/md';
import { FaArrowCircleRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="lg:h-[900px] w-full bg-cover bg-center relative lg:p-45 py-10 lg:-mt-10"
            style={{ backgroundImage: `url(${BgImage})` }}>

            {/* Content wrapper */}
            <div className="w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full">

                {/* text section */}
                <div className='lg:w-[60%] w-full text-center lg:text-left  lg:ml-auto'>
                    <h1 className='text-xl lg:text-3xl font-medium text-blue-300 mb-5'>The Leader in Online Learning</h1>

                    <p className='text-3xl lg:text-5xl font-bold text-blue-950  '>Engaging &  <br /> Accessible Online <br /> Courses For All</p>

                    {/* search box */}
                    <section className='mt-6 lg:mt-10 flex justify-center lg:justify-start'>
                        <fieldset className="bg-white p-2 lg:p-4 rounded-full flex items-center gap-2 w-full max-w-md">
                            <span className="text-gray-500 text-xl">
                                <MdSearch />
                            </span>
                            <input
                                type="text"
                                className="flex-1 outline-none placeholder-gray-400 text-sm lg:text-base"
                                placeholder="Search Online Courses.."
                            />
                            <span className='text-2xl lg:text-3xl text-amber-400'>
                                <FaArrowCircleRight />
                            </span>
                        </fieldset>
                    </section>

                    {/* rating */}
                    <p className='text-xl lg:text-3xl font-medium mt-8 lg:mt-12'>Trusted by over 15K Users <br /> worldwide since 2022</p>

                    <p className='text-2xl lg:text-5xl font-bold flex items-center justify-center lg:justify-start gap-4 mt-6 lg:mt-10'>
                    290+ 4.5
                        <span className='text-red-600 text-xl lg:text-2xl flex items-center gap-2 lg:gap-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </span>
                    </p>
                </div>

                {/* Image section */}
                <div className='w-full lg:w-[400px] mt-10 lg:mt-0 lg:mr-5 flex justify-center'>
                    <img src={photo} alt="" className='w-72 lg:w-full' />
                </div>
            </div>

            {/* Cards */}
            <div className="w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 mt-10 lg:mt-25">

                {/* Card 1 */}
                <div className="w-64 p-7 rounded-2xl flex items-center gap-5 bg-white border border-amber-100 shadow-md">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-amber-50">
                        <img className="w-full h-full object-contain" src={penciling} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold">6K</h1>
                        <p className="text-lg lg:text-xl">Online Courses</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-64 p-7 rounded-2xl flex items-center gap-5 bg-white border border-amber-100 shadow-md">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-amber-50">
                        <img className="w-full h-full object-contain" src={second} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold">126+</h1>
                        <p className="text-lg lg:text-xl">Expert Tutors</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-64 p-7 rounded-2xl flex items-center gap-5 bg-white border border-amber-100 shadow-md">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-amber-50">
                        <img className="w-full h-full object-contain" src={certificate} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold">3K+</h1>
                        <p className="text-lg lg:text-xl">Certified Courses</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="w-64 p-7 rounded-2xl flex items-center gap-5 bg-white border border-amber-100 shadow-md">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-amber-50">
                        <img className="w-full h-full object-contain" src={third} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold">37K+</h1>
                        <p className="text-lg lg:text-xl">Online Students</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;
