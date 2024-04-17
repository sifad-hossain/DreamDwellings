
import { Link } from "react-router-dom";


const HomeCard = ({ home }) => {
    const { estate_title, segment_name, image, price, id } = home;
    return (
        <div

            className="mx-auto max-w-[430px] space-y-4 rounded-lg bg-white p-4 shadow-lg md:w-[430px] border border-pink-400 hover:shadow-pink-300  duration-300 transition-all hover:scale-105">

           
            <img src={image} alt="" />
            <div className="grid gap-2 ">
                <h1 className="text-xl font-semibold ">{segment_name}</h1>
                <p className="text-base font-medium text-slate-900" >{estate_title}</p>
                <div className="text-lg font-semibold">Price:{price}</div>
            </div>
            <div className="flex gap-4">

                <Link
                    to={`/home/${id}`}
                    className="rounded-md border w-full b border-slate-600 px-4    hover:border-pink-600 hover:text-black text-base  py-2  duration-300 hover:bg-white text-center">View Property</Link>
            </div>
        </div>

    );
};

export default HomeCard;

