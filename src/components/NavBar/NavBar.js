import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul className="inline-flex">
                    <li className="p-2 my-4 px-5 rounded-full hover:bg-red-500 hover:text-white "><Link to="/home">Home</Link></li>
                    <li className="p-2 my-4 px-5 rounded-full hover:bg-red-500 hover:text-white "><Link to="/chart">Chart</Link></li>
                    <li className="p-2 my-4 px-5 rounded-full hover:bg-red-500 hover:text-white "><a href="#">Home</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;