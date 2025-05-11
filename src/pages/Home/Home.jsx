import Blog from "../../Components/Blog";
import AllTutors from "../AllTutors";
import Banner from "../Banner";
import CategoryCard from "../CategoryCard";
import FeaturedInstructor from "../FeaturedInstructor";
import Mentor from "../Mentor";
import Trust from "../Trust";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <section className=" w-7/12 mx-auto justify-center">
                <CategoryCard></CategoryCard>
            </section>
            <section className="  ">
                <Mentor></Mentor>
            </section>
            <section >
              <Trust></Trust>
            </section>

            <section className="w-10/12 mx-auto justify-center">
                <Blog></Blog>
            </section>
            

        </div>
    );
};

export default Home;