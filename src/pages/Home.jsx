import Slider from "./slider/Slider";
import HomeCard from "./HomeCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";



const Home = () => {

    // const home = useLoaderData() || []
    // console.log(home);
    const [item, setItem] = useState()
    useEffect( () => {
        fetch(`${import.meta.env.VITE_API_URL}/products`)
        .then(res => res.json())
        .then(data => {
            setItem(data)
        })
    },[])
    console.log(item);

    return (
        <>

            <Helmet>
                <title>DreamDwellings | Home</title>
            </Helmet>

            <Slider></Slider>
            <div className="grid grid-cols-1 sm:w-full lg:grid-cols-3 md:grid-cols-2 mt-10 space-y-4">
                {
                    item?.map(homes => <HomeCard
                        key={homes.id}
                        home={homes}
                    ></HomeCard>)
                }
            </div>

        </>
    );
};

export default Home;