import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye, FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Users = () => {
    const loadsedUsers = useLoaderData();
    const [users, setUsers] = useState(loadsedUsers);

    const handleDelete = (id) => {
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
                fetch(`http://localhost:5000/users/${id}`, {
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
                            const remaining = users.filter(user=> user._id !== id);
                            setUsers(remaining)
                        }
                    })
            }  
        });
    }
    return (
        <div>
            <h1>Loaded User {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Joined At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>{ }</th>
                                <td>{user.email}</td>
                                <td>{user.createdTimes}</td>
                                <td>
                                    {user.lastLogin}
                                </td>
                                <td>
                                    <div className='flex  gap-5'>
                                        <div className='btn w-fit px-2  hover:text-red-700 '>
                                            <FaEye className='text-2xl my-2 cursor-pointer '></FaEye>
                                        </div>
                                        <div className='btn w-fit px-2  hover:text-red-700 '>
                                            <FaPen className='text-2xl my-2 cursor-pointer '></FaPen>
                                        </div>
                                        <div onClick={() => handleDelete(user._id)} className='  hover:text-red-700 btn w-fit px-2'>
                                            <AiFillDelete className='text-2xl my-2 cursor-pointer '></AiFillDelete>
                                        </div>
                                        <Link></Link>
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;