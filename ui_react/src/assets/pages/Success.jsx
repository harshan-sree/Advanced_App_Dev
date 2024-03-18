import React from 'react'
import {  useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const { formData, yogaClass, dateTime } = location.state; 
    const handlePrint = () => {
        window.print(); 
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text text-red-400">Yoga Class Details</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">{yogaClass.name}</h2>
                <p className="text-gray-600 mb-2">Instructor: {yogaClass.instructor}</p>
                <p className="text-gray-600 mb-2">Timing: {yogaClass.timing}</p>
                <p className="text-gray-600 mb-2">Date and Time: {dateTime}</p> 
                <p className="text-gray-600 mb-2">Name: {formData.name}</p>
                <p className="text-gray-600 mb-2">Email: {formData.email}</p>
                <p className="text-gray-600 mb-2">Phone Number: {formData.phoneNumber}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handlePrint}>Print</button>
            </div>
            
        </div>
    );
};


export default Success
