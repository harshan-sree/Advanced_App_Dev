import React from 'react'
import {  useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const { formData, yogaClass, dateTime } = location.state;
    const handlePrint = () => {
        window.print();
    };

    return (
        
        <div className='bg-gray-800 h-screen flex flex-col justify-center items-center'>
             <h1 className="text-3xl font-bold text-center mb-8 text-white">Yoga Class Details</h1>
            <div className="bg-gray-800 container mx-auto py-8">
               
                <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl text-white font-semibold mb-4">Class Name: {yogaClass.name}</h2>
                    <p className="text-white mb-2">Instructor: {yogaClass.instructor}</p>
                    <p className="text-white mb-2">Timing: {yogaClass.timing}</p>
                    <p className="text-white mb-2">Date and Time: {dateTime}</p>
                    <p className="text-white mb-2">Name: {formData.name}</p>
                    <p className="text-white mb-2">Email: {formData.email}</p>
                    <p className="text-white mb-2">Phone Number: {formData.phoneNumber}</p>
                    <button className="bg-yellow-500 hover:bg-yellow-300 text-black py-2 px-4 rounded-lg" onClick={handlePrint}>Print</button>
                </div>
            </div>
        </div>
    );
};


export default Success
