import { useState } from "react";
import { TagsInput } from "react-tag-input-component";


const AddProduct = () => {

    const [selected, setSelected] = useState([]);

    const handleAddItem = (e) => {
        e.preventDefault()
        const segment_name = e.target.segment_name.value;
        const estate_title = e.target.estate_title.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const area = e.target.area.value;
        const location = e.target.location.value;
        const facilities = selected;
        const status = "sale"
        const newItem = { segment_name, estate_title, description, price, area, location, status, facilities }
        console.log(newItem);

        fetch("http://localhost:5000/product", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId)
                    console.log(data);
                alert("alhamdulliah data post hoice")

            })

    }
    return (
        <>
            <section className="pt-28">
                <div className="w-full mt-1">
                    <div className="bg-white border border-gray-300 shadow-md rounded-lg w-9/12 h-auto mx-auto p-8">

                        <h3 className="text-center text-3xl tracking-wider font-semibold mb-10">Add Your Product</h3>

                        <form onSubmit={handleAddItem}>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                                {/* Segment_name */}
                                <label htmlFor="segment_name" className="font-medium">Segment_Name:

                                    <input id="segment_name" type="text" placeholder="Name"
                                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-none w-full hover:border-[#6D28D9] outline-none"></input> </label>


                                {/* Estate_title */}
                                <label htmlFor="estate_title" className="font-medium">Estate_title:

                                    <input type="text" id="estate_title" placeholder="Estate_title"
                                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-none w-full hover:border-[#6D28D9] outline-none" /></label>



                                {/* Description */}
                                <label htmlFor="description" className="font-medium">Description:
                                    <input type="text" id="description" placeholder="Description"
                                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-none w-full hover:border-[#6D28D9] outline-none" /></label>

                                {/* Price */}
                                <label className="font-medium" htmlFor="price">
                                    Price:
                                    <input className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-none w-full hover:border-[#6D28D9] outline-none"
                                        type="text" placeholder="Enter Price" id="Price" name="price" /></label>

                                {/* Area */}
                                <label htmlFor="area" className="font-medium">Area:
                                    <input type="number" id="area" placeholder="Area" className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-none w-full hover:border-[#6D28D9] outline-none" /></label>

                                {/* Location */}
                                <label htmlFor="location" className="font-medium">Location:
                                    <input type="text" id="location" placeholder="Location"
                                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-none w-full hover:border-[#6D28D9] outline-none" /></label>


                                <pre>{JSON.stringify(selected)}</pre>
                                <TagsInput
                                    id="facilities"
                                    value={selected}
                                    onChange={setSelected}
                                    name="facilities"
                                    placeHolder="Enter facilities"
                                    classNames="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-none w-full hover:border-[#6D28D9] outline-none"
                                />
                                <em>press enter or comma to add new tag</em>

                            </div>

                            <div className="mt-8 text-center">
                                <button type="submit" value="addItem"
                                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-none w-full hover:border-[#6D28D9] outline-none">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddProduct;