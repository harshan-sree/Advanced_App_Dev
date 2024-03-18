import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const TrainingBook = () => {
    const { programName } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const programDetails = location.state;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleConfirmBooking = () => {
        if (!formData.name || !formData.email || !formData.phoneNumber) {
            alert('Please provide all details.');
        } else if (formData.phoneNumber.length !== 10) {
            alert('Please enter a 10-digit Phone Number.');
        } else {
            navigate('/booked', {
                state: {
                    formData: formData,
                    programDetails: programDetails,
                    programName: programName
                }
            });
        }
    };

    return (
        <div className='bg-gray-900 min-h-screen'>       
             <div className="container mx-auto py-8 bg-gray-800  ">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">Confirm Booking for {programName}</h1>
            <div className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-white font-bold mb-2">Phone Number</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500" />
                </div>
                {programDetails && (
                    <div className="text-white mb-4">
                        <p className="text-white font-bold mb-2">Program Details:</p>
                        <p>Location: {programDetails.location}</p>
                        <p>Duration: {programDetails.duration}</p>
                        <p>Start Date: {programDetails.startDate}</p>
                    </div>
                )}
                <button type="button" onClick={handleConfirmBooking} className="bg-yellow-500  font-bold uppercase text-gray-800 py-2 px-4 hover:bg-yellow-400 transition duration-300 rounded-md mt-4 block w-full text-center">Confirm Booking</button>
            </div>
        </div>
        </div>

    );
};

export default TrainingBook;

