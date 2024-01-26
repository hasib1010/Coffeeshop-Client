import React from 'react';

const AddCoffee = () => {
    return (
        <div>
            <h1 className='text-center mt-7 font-bold text-5xl'>Add New Coffee</h1>
            <div className='container mx-auto '>
                <form className='w-4/5 mx-auto bg-[#F4F3F0] min-h-svh'>
                    <div className='flex justify-around'>
                        <div>
                            <h2 className='text-xl '>Name</h2>
                            <input type="text" name='name' placeholder='Enter coffee name' className='p-3 placeholder:text-red-600 border rounded-xl mt-3    w-96  border-black' />
                        </div>
                        <div>
                            <h2 className='text-xl '>Name</h2>
                            <input type="text" name='name' placeholder='Enter coffee name' className='p-3 placeholder:text-red-600 border  rounded-xl mt-3   border-black w-96' />
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div>
                            <h2 className='text-xl '>Name</h2>
                            <input type="text" name='name' placeholder='Enter coffee name' className='p-3 placeholder:text-red-600 border rounded-xl mt-3    w-96  border-black' />
                        </div>
                        <div>
                            <h2 className='text-xl '>Name</h2>
                            <input type="text" name='name' placeholder='Enter coffee name' className='p-3 placeholder:text-red-600 border  rounded-xl mt-3   border-black w-96' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;