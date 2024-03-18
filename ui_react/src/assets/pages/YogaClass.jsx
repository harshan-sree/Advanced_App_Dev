import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const YogaClass = () => {
    const [yogaClasses, setYogaClasses] = useState([]);
    const [formData, setFormData] = useState({});
    const [confirmation, setConfirmation] = useState({});
    const [joinedClass, setJoinedClass] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const classesData = [
            { id: 1, name: 'Hatha Yoga', instructor: 'John Doe', timing: 'Monday, Wednesday, Friday - 10:00 AM to 11:30 AM' },
            { id: 2, name: 'Vinyasa Flow', instructor: 'Jane Smith', timing: 'Tuesday, Thursday - 6:00 PM to 7:30 PM' },
            { id: 3, name: 'Power Yoga', instructor: 'Alice Johnson', timing: 'Monday, Wednesday - 6:00 AM to 7:30 AM' },
        ];
        const initialFormData = {};
        const initialConfirmation = {};
        for (const yogaClass of classesData) {
            initialFormData[yogaClass.name] = { name: '', email: '', phoneNumber: '' };
            initialConfirmation[yogaClass.name] = false;
        }
        setFormData(initialFormData);
        setConfirmation(initialConfirmation);
        setYogaClasses(classesData);
    }, []);

    const handleInputChange = (e, className) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [className]: {
                ...prevState[className],
                [name]: value
            }
        }));
    };

    const handleConfirmation = (className) => {
        const { name, email, phoneNumber } = formData[className];
        if (name && email && phoneNumber) {
            if (phoneNumber.length === 10 && !isNaN(phoneNumber)) { // Check if phoneNumber is 10 digits and contains only numbers
                setConfirmation(prevState => ({
                    ...prevState,
                    [className]: true
                }));
            } else {
                alert('Phone number must be 10 digits.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleJoinClass = (className) => {
        if (confirmation[className]) {
            setJoinedClass(className);
            const currentDate = new Date().toLocaleDateString();
            const currentTime = new Date().toLocaleTimeString();
            const currentDateTime = `${currentDate} ${currentTime}`;
            
            setTimeout(() => {
                navigate(`/details/${className}`, { 
                    state: { 
                        formData: formData[className],
                        yogaClass: yogaClasses.find(item => item.name === className),
                        dateTime: currentDateTime 
                    }
                });
            }, 5000); 
        } else {
            alert('Please confirm your information first.');
        }
    };

    return (
        <div className='bg-gray-600 bg-fixed min-h-screen'>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-8 text text-red-400">Yoga Classes at THE Yoga Academy</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {yogaClasses.map((yogaClass) => (
                        <div key={yogaClass.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-2">{yogaClass.name}</h2>
                            <p className="text-gray-600 mb-2">Instructor: {yogaClass.instructor}</p>
                            <p className="text-gray-600 mb-2">Timing: {yogaClass.timing}</p>
                            <div className="mb-4">
                                <input type="text" name="name" value={formData[yogaClass.name]?.name} onChange={(e) => handleInputChange(e, yogaClass.name)} placeholder="Your Name" className="border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:border-blue-500" />
                                <input type="email" name="email" value={formData[yogaClass.name]?.email} onChange={(e) => handleInputChange(e, yogaClass.name)} placeholder="Your Email" className="border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:border-blue-500" />
                                <input type="tel" name="phoneNumber" value={formData[yogaClass.name]?.phoneNumber} onChange={(e) => handleInputChange(e, yogaClass.name)} placeholder="Your Phone Number" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500" />
                            </div>
                            <button onClick={() => handleConfirmation(yogaClass.name)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">Confirm</button>&nbsp;
                            <button
                                className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${confirmation[yogaClass.name] ? '' : 'opacity-50 cursor-not-allowed'}`}
                                onClick={() => handleJoinClass(yogaClass.name)}
                                disabled={!confirmation[yogaClass.name]}
                            >
                                Join
                            </button>
                            {joinedClass === yogaClass.name && (
                                <div className="mt-4 text-center">
                                    <p className="text-lg font-semibold text-green-500">You have joined the {joinedClass} class!</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YogaClass;
