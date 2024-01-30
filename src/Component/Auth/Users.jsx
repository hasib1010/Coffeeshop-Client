import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadsedUsers = useLoaderData();
    return (
        <div>
            <h1>Loaded User {loadsedUsers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Joined At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadsedUsers.map(user=> <tr key={user._id}>
                                <th>{}</th>
                                <td>{user.email}</td>
                                <td>{user.createdTimes}</td>
                                <td>Blue</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;