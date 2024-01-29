import React from 'react';
import { FaEye, FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const CoffeeLayout = ({ coffee, coffees, setCoffees }) => {
  const { chef, details, name, photo, supplier, taste, _id } = coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });

              const remaining = coffees.filter(cof=> cof._id !== _id)
              setCoffees(remaining)
            }
          })
      }


    });
  }
  return (
    <div className='flex items-center  gap-11 border-2 w-fit p-4 rounded-lg drop-shadow-lg'>
      <div className='flex flex-col items-center justify-center'>
        <img src={photo} alt="" />
        <h1>{name}</h1>
        <p>{chef}</p>
        <p>{details}</p>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='btn w-fit px-2  hover:text-red-700 '>
          <FaEye className='text-2xl my-2 cursor-pointer '></FaEye>
        </div>
        <Link to={`/updateCoffee/${_id}`}>
          <div className='btn w-fit px-2  hover:text-red-700 '>
            <FaPen className='text-2xl my-2 cursor-pointer '></FaPen>
          </div></Link>
        <div onClick={() => handleDelete(_id)} className='  hover:text-red-700 btn w-fit px-2'>
          <AiFillDelete className='text-2xl my-2 cursor-pointer '></AiFillDelete>
        </div>

      </div>
    </div>
  );
};

export default CoffeeLayout;