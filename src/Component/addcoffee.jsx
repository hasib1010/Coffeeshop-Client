import React from 'react';
import { Link } from 'react-router-dom';

const AddCoffee = () => {
    return (
        <div>
            <div className='w-fit mx-auto '><Link className='btn btn-primary' to={'/'}>Home</Link></div>

            <div className='container mx-auto '>
                <form className='w-4/5 mx-auto mt-4 bg-[#F4F3F0] min-h-svh'>
                    <h1 className='text-center  font-bold text-5xl py-6'>Add New Coffee</h1>
                    <p className='w-3/5 mx-auto text-center my-4 text-sm'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <div className='flex justify-around'>

                        <label className='mt-5'>
                            <h2 className='text-xl '>Name</h2>
                            <input type="text" name='name' placeholder='Enter coffee name' className='p-3 placeholder:text-red-600 border rounded-xl mt-3    w-96  border-black' />
                        </label>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Chef</h2>
                            <input type="text" name='chef' placeholder='Enter coffee chef' className='p-3 placeholder:text-red-600 border  rounded-xl mt-3   border-black w-96' />
                        </label>
                    </div>
                    <div className='flex justify-around'>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Supplier</h2>
                            <input type="text" name='supplier' placeholder='Enter coffee supplier' className='p-3 placeholder:text-red-600 border rounded-xl mt-3    w-96  border-black' />
                        </label>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Taste</h2>
                            <input type="text" name='taste' placeholder='Enter coffee taste' className='p-3 placeholder:text-red-600 border  rounded-xl mt-3   border-black w-96' />
                        </label>
                    </div>
                    <div className='flex justify-around'>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Category</h2>
                            <input type="text" name='category' placeholder='Enter coffee Category' className='p-3 placeholder:text-red-600 border rounded-xl mt-3    w-96  border-black' />
                        </label>
                        <label className='mt-5'>
                            <h2 className='text-xl '>Details</h2>
                            <input type="text" name='details' placeholder='Enter coffee Details' className='p-3 placeholder:text-red-600 border  rounded-xl mt-3   border-black w-96' />
                        </label>
                    </div>
                    <div className='w-4/5 mx-auto mt-7'>
                        <h2 className="text-xl">Photo</h2>
                        <input className='  w-3/4  rounded-md border h-12 pl-4' placeholder='Enter photo URL' type="text" />
                    </div>
                  
                 <div className='flex items-center  justify-center'>
                 <input className='w-5/6   mt-7 btn btn-warning' type="submit" value="Add Coffee" />
                 </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;