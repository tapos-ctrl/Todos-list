import React from 'react';
import { useNavigate } from "react-router-dom";
import notFound from '../../img/7aqcppklh6bexoa70320-removebg-preview (2).png'
const NotFound = () => {
    let navigate = useNavigate();

    return (
        <div className=" flex justify-center">
            <div className=" ">
               
                <img src={notFound} alt="" />
                <h1 className="-mt-12 text-6xl">Page Not Found</h1>
                <div className="h-44">
                <button onClick={() => {navigate('/home')}} className="py-2 my-10 bottom-2 px-10 rounded-full text-white bg-red-500">Go To Home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;