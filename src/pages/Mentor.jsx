import BgImage from '../assets/banner.webp';
import Thinking from '../assets/Thinking.png';
import { IoCheckmarkCircle } from "react-icons/io5";

const Mentor = () => {
    return (

        <div className="lg:h-[500px] w-full bg-cover   lg:p-45 mt-40
          mb-10 "
            style={{ backgroundImage: `url(${BgImage})` }} >

            <div className='  lg:flex  items-center  w-10/12 mx-auto justify-center -mt-30  p-5'>

                <div className='w-full' >
                    <img src={Thinking} alt="" />
                </div>

                <div className=' ' >
                    <h1 className='text-4xl font-bold mb-5 text-[#002058]'>Want to share your <br /> knowledge? Join us a Mentor
                    </h1>

                    <p className='text-xl font-medium mb-5 text-[#685f78]'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.

                    </p>

                    <p className='flex gap-4 items-center text-2xl text-green-600'> <span><IoCheckmarkCircle />
                    </span> Best Courses </p>
                    <p className='flex gap-4 items-center text-2xl text-green-600'> <span><IoCheckmarkCircle />
                    </span> Top rated Instructors </p>

                    <button className="btn btn-success mt-8 rounded-full p-5 ">Read More </button>




                </div>

            </div>


        </div>

    );
};

export default Mentor;