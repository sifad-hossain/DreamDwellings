import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Homes = () => {
    const [product, setProduct] = useState('')
    const { id } = useParams()
    useEffect(() => {
        fetch('/home.json')
            .then(res => res.json())
            .then(data => {
                const homes = data.find(home => home?.id === id)
                setProduct(homes)
                console.log(data, id);
            })
    }, [id]);

    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = product;
    console.log(product);

    return (
        <div className="w-[90%]  grid sm:grid-row-1 grid-cols-2 mx-auto mt-16 mb-10 space-x-4 ">
            
            <Helmet>
                <title>DreamDwellings - Products Details{id}</title>
            </Helmet>

            <div className="  grid-cols-1">
                <h1 className="text-xl font-bold text-neutral-700 uppercase">Product Name</h1>
                
                <h1 className="text-4xl font-bold text-neutral-900">{segment_name}</h1>
                <h2 className="text-xl font-semibold text-gray-800 pt-4">{description}</h2>

                <div className="flex border-t border-gray-300 py-2 mt-8">
                    <span className="text-gray-500">Location</span><span
                        className="ml-auto text-gray-900 text-base">{location}</span></div>

                <div className="flex border-t border-gray-300 py-2">
                    <span className="text-gray-500">Area</span><span
                        className="ml-auto text-gray-900 text-base">{area}</span></div>



                <div className="flex border-t border-gray-300 py-2 ">
                    <span className="text-gray-500">Status</span><span
                        className="ml-auto text-gray-900 text-base">{status}</span></div>

                <div className="flex justify-between items-center border-t border-gray-300 py-2">
                    <span className=" title-font font-medium text-2xl text-gray-900">{price}</span>
                    <button className="btn btn-primary rounded-sm text-white transition-all duration-300 hover:bg-secondary hover:border-secondary">Buy Now</button></div>

                   

            </div>









            <div className="  grid-cols-2 ">
            <img className="w-[90%]" src={image} alt="" />
            </div>
        </div>
    );
};

export default Homes;