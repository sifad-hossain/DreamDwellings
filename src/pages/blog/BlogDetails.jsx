import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const BlogDetails = () => {


    const [products, setProducts] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => {                
                const product = data.find(blog => blog?.id === parseInt(id)) || {}
                setProducts(product)
                console.log(product);
                console.log(data, id);
            })
    }, [id]);



    const {  title, image, description, time } = products || {}
    console.log(products);


    return (
        <div className="mx-auto pt-28 p-4 shadow-md dark:bg-gray-50 dark:text-gray-800
        w-full lg:w-[60%]">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Published{time}</a>
		</div>
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center mx-auto w-[100%] rounded-md h-72 dark:bg-gray-500 " />
			<div className="flex items-center text-xs">
				<span className="text-base font-medium">Read: 6 min</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className=" font-semibold dark:text-blue-600 text-lg text-black">Name: {title}</h3>
			</a>
			<p className="leading-snug dark:text-gray-600 text-base font-normal">{description}</p>
		</div>
	</div>
</div>
    );
};

export default BlogDetails;