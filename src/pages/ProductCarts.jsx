
import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

const ProductCarts = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('/home.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
            })

    }, []);

    return (
        <div className="grid grid-cols-3 mt-6">

            {
                product.map(products =>
                    <ProductCart key={products.id}
                        products={products}>
                    </ProductCart>)
            }

        </div>
    );
};

export default ProductCarts;