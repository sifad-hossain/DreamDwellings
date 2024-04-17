import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className='text-center mt-48 bg-slate-400 w-[500px] mx-auto '>

            <Helmet>
                <title>DreamDwellings | 404 Page Not Found</title>
            </Helmet>
            <div className="py-10">
                <h1 className='text-4xl font-bold text-black '>
                    404
                </h1>

                <h2 className='text-5xl font-bold text-black '>
                    NOT FOUND
                </h2>
            </div>
            <div className="pt-10 bg-white shadow-lg hover:scale-105 hover:bg-slate-200">

                <Link className="  btn-secondary text-7xl text-black font-bold hover:text-blue-700">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;













