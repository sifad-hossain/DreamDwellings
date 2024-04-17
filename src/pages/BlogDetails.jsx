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



    const {  title, image, description } = products || {}
    console.log(products);


    return (
        <div>
            <p>{description}</p>
        </div>
    );
};

export default BlogDetails;