/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ProductCart = ({ products }) => {

    console.log(products);


    const { image, estate_title, segment_name, price, id } = products || {};



    return (
        <div

            className="mx-auto  h-[450px]  rounded-lg bg-white p-4 shadow-lg md:w-[430px] border border-pink-400 hover:shadow-pink-300  duration-300 transition-all hover:scale-105 mb-4 ">

            <Helmet>
                <title>DreamDwellings | Products</title>
            </Helmet>

            <img src={image} alt="" />
            <div className="grid gap-2 ">
                <h1 className="text-xl font-semibold ">{segment_name}</h1>
                <p className="text-base font-medium text-slate-900" >{estate_title}</p>
                <div className="text-lg font-semibold">Price:{price}</div>
            </div>
            <div className="flex gap-4">

                <Link
                    to={`/home/${id}`}
                    className="rounded-md text-center border w-full b border-slate-600 px-4    hover:border-pink-600 hover:text-black text-base  py-2  duration-300 hover:bg-white">View Property</Link>
            </div>
        </div>

    );
};

export default ProductCart;

