import { FaStar } from 'react-icons/fa6';
import BgImage from '../../assets/banner.webp'
import photo from '../../assets/object.webp'
import { MdSearch } from 'react-icons/md';
import { FaArrowCircleRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="h-[800px] w-full bg-cover bg-center  "
            style={{ backgroundImage: `url(${BgImage})` }}>


            <div className=' w-10/12 mx-auto  h-full flex ' >
                {/* text section */}
                <div className=' w-[60%] p-45   '>
                    <h1 className='text-3xl font-medium text-blue-300 -mt-25 mb-10'>The Leader in Online Learning</h1>

                    <p className='text-6xl font-bold text-blue-950'>Engaging & Accessible Online Courses For All </p>

                    <section className='mt-10 '>
                        <fieldset className=" bg-white p-4  rounded-full flex items-center gap-2 ">
                            <span className="text-gray-500 text-xl ">
                                <MdSearch />
                            </span>
                            <input
                                type="text"
                                className="flex-1 outline-none focus:outline-none placeholder-gray-400"
                                placeholder="Search Online Courses.."
                            />

                            <span className='text-3xl text-amber-400'>
                            <FaArrowCircleRight />

                            </span>
                        </fieldset>
                    </section>



                    <p className=' text-3xl font-medium mt-12'>Trusted by over 15K Users <br /> worldwide since 2022</p>

                    <p className=' text-5xl font-bold flex gap-4 mt-10'>0+    4.5
                         <span className='text-red-600 text-2xl  flex items-center gap-5'>
                            
                             <FaStar /> 
                             <FaStar /> 
                             <FaStar /> 
                             <FaStar /> 
                         
                         
                         </span> </p>

                </div>

                {/* Image section  */}
                <div className='w-[400px] mt-25'>
                     <img src={photo} alt="" />
                </div>



            </div>




        </div>
    );
};

export default Banner;