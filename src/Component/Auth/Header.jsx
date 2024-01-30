import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-center gap-8 my-3'>
            <Link className='btn btn-warning' to={'/'}>Home</Link>
            <Link className='btn btn-warning' to={'/login'}>Login</Link>
            <Link className='btn btn-warning' to={'/signup'}>SignUp</Link>
            <Link className='btn btn-warning' to={'/users'}>Users</Link>
            <Link className='btn btn-warning' to={'/addCoffee'}>Add Coffee</Link>
        </div>
    );
};

export default Header; 