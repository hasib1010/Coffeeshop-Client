import React from 'react';
import { FaEye, FaPen  } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const CoffeeLayout = ({ coffee }) => {
    console.log(coffee);
    const { chef, details, name, photo, supplier, taste } = coffee;
    return (
        <div className='flex items-center  gap-11 border-2 w-fit p-4 rounded-lg drop-shadow-lg'>
          <div className='flex flex-col items-center justify-center'>
          <img src={photo} alt="" />
            <h1>{name}</h1>
            <p>{chef}</p>
            <p>{details}</p>
          </div>
          <div>
            <FaPen className='text-2xl my-2 cursor-pointer hover:text-red-700 '></FaPen>
            <FaEye className='text-2xl my-2 cursor-pointer hover:text-red-700 '></FaEye>
            <AiFillDelete className='text-2xl my-2 cursor-pointer hover:text-red-700 '></AiFillDelete>
          </div>
        </div>
    );
};

export default CoffeeLayout;