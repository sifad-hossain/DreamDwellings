import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Blog = () => {


    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => {
                setBlog(data)                
            })
    }, []);



    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto">

            <Helmet>
                <title>DreamDwellings - Blog</title>
            </Helmet>

            {
                blog?.map(blogs =>

                    <div key={blogs.id} >

                        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-between pb-4 border-bottom">
                                <div className="flex items-center">
                                    <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">{blogs.time}</a>
                                </div>

                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src={blogs.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                    <div className="flex items-center text-xs">
                                        <span>6 min ago</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <a rel="noopener noreferrer" href="#" className="block">
                                        <h3 className="text-xl font-semibold dark:text-blue-600">{blogs.title}</h3>
                                    </a>




                                    {/* <p className="leading-snug dark:text-gray-600">{blogs.description}</p> */}

                                    {
                                        blogs.description.length > 100
                                            ? <p>{blogs.description.slice(0, 100)}
                                                <Link
                                                    to={`/blog/${blogs.id}`}
                                                    className="text-blue-600 font-bold">See more</Link>
                                            </p>
                                            : <p>{blogs.description}</p>

                                    }






                                </div>
                            </div>
                        </div>
                    </div>

                )

            }




        </div>
    );
};

export default Blog;