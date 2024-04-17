import { useLoaderData } from "react-router-dom";
import Slider from "./slider/Slider";
import HomeCard from "./HomeCard";
import { Helmet } from "react-helmet-async";



const Home = () => {

    const home = useLoaderData() || []
    console.log(home);

    return (
        <>

            <Helmet>
                <title>DreamDwellings | Home</title>
            </Helmet>

            <Slider></Slider>
            <div className="grid grid-cols-1 sm:w-full lg:grid-cols-3 md:grid-cols-2 mt-10 space-y-4">
                {
                    home?.map(homes => <HomeCard
                        key={homes.id}
                        home={homes}
                    ></HomeCard>)
                }
            </div>

        </>
    );
};

export default Home;