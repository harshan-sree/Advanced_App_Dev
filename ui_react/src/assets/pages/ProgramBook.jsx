import React from 'react'
import { useLocation } from 'react-router-dom';

const ProgramBook = () => {
    const location = useLocation();
    const { formData, programDetails, programName } = location.state;
    const handlePrint = () => {
        window.print();
    };
    return (
        <div className='bg-gray-900 min-h-screen'>
        <div className="bg-gray-800 container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">Booking Confirmation for {programName}</h1>
            <div className="max-w-md mx-auto bg-gray-400 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">Form Data:</h2>
                    <div className="mb-4">
                        <p className="font-semibold">Name:</p>
                        <p>{formData.name}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Email:</p>
                        <p>{formData.email}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Phone Number:</p>
                        <p>{formData.phoneNumber}</p>
                  
                        
                        <p className="font-semibold">Location:</p>
                        <p>{programDetails.location}</p>
                        <p className="font-semibold">Duration:</p>
                        <p>{programDetails.duration}</p>
                   
                 
                        <p className="font-semibold">Start Date:</p>
                        <p>{programDetails.startDate}</p>
                    </div>
                    <button onClick={handlePrint} className="bg-yellow-500 text-gray-800  hover:bg-yellow-400 transition duration-300 font-bold uppercase py-2 px-4 rounded-md mt-4 block w-full text-center">Print</button>
                </div>
               
            </div>
        </div>
        </div>
    );

}

export default ProgramBook
