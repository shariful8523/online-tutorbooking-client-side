import AllTutors from "../AllTutors";
import Banner from "../Banner";
import CategoryCard from "../CategoryCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <section className=" w-7/12 mx-auto justify-center">
                <CategoryCard></CategoryCard>
            </section>

            {/* <section className=" ">
                <AllTutors></AllTutors>
            </section> */}

        </div>
    );
};

export default Home;