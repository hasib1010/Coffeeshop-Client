import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { chef, details, name, photo, supplier, taste, _id, category } = coffee;
    
    const updateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, chef, supplier, taste, category, details, photo };
        
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'Coffee Added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                } 
            })
        // reset()
    }
    return (
        <div>
           <Link to={'/'}>Home</Link>
            <div className='container mx-auto '>
                <form onSubmit={updateCoffee}   className='w-4/5 mx-auto mt-4 bg-[#F4F3F0] min-h-svh'>
                    <h1 className='text-center  font-bold text-5xl py-6'> <p>Update details of {name} </p></h1>
                     
                    <div className='flex justify-around'>

                        <label className='mt-5'>
                            <h2 className='text-xl '>Name</h2>
                            <input type="text" name='name' defaultValue={name} placeholder='Enter coffee name' className='p-3 placeholder:text-red-600 border rounded-xl mt-3    w-96  border-black' />
                        </label>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Chef</h2>
                            <input type="text" name='chef' defaultValue={chef} placeholder='Enter coffee chef' className='p-3 placeholder:text-red-600 border  rounded-xl mt-3   border-black w-96' />
                        </label>
                    </div>
                    <div className='flex justify-around'>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Supplier</h2>
                            <input type="text" name='supplier'  defaultValue={supplier} placeholder='Enter coffee supplier' className='p-3 placeholder:text-red-600 border rounded-xl mt-3    w-96  border-black' />
                        </label>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Taste</h2>
                            <input type="text" name='taste'  defaultValue={taste} placeholder='Enter coffee taste' className='p-3 placeholder:text-red-600 border  rounded-xl mt-3   border-black w-96' />
                        </label>
                    </div>
                    <div className='flex justify-around'>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Category</h2>
                            <input type="text" name='category'  defaultValue={category} placeholder='Enter coffee Category' className='p-3 placeholder:text-red-600 border rounded-xl mt-3    w-96  border-black' />
                        </label>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Details</h2>
                            <input type="text" name='details'  defaultValue={details} placeholder='Enter coffee Details' className='p-3 placeholder:text-red-600 border  rounded-xl mt-3   border-black w-96' />
                        </label>
                    </div>
                    <div className='w-4/5 mx-auto mt-7'>
                        <h2 className="text-xl">Photo</h2>
                        <input name='photo' defaultValue={photo} className='   w-3/4  rounded-md border h-12 pl-4' placeholder='Enter photo URL' type="text" />
                    </div>

                    <div className='flex items-center  justify-center'>
                        <input className='w-5/6   mt-7 btn btn-warning' type="submit" defaultValue="Update Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;