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
            { id: 1, name: 'Hatha Yoga', instructor: 'John Doe', timing: 'Monday, Friday - 10:00 AM to 11:30 AM' },
            { id: 2, name: 'Vinyasa Flow', instructor: 'Jane Smith', timing: 'Tuesday, Thursday - 6:00 PM to 7:30 PM' },
            { id: 3, name: 'Power Yoga', instructor: 'Alice Johnson', timing: 'Sunday, Monday - 6:00 AM to 7:30 AM' },
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
            if (phoneNumber.length === 10 && !isNaN(phoneNumber)) { 
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
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"    
  height="24"   
  fill="none"   
  stroke="white"
  strokeWidth="2" 
  className="bi bi-arrow-left" 
  viewBox="0 0 16 16"
  onClick={() => {
    window.history.back();
  }}
  style={{ cursor: 'pointer' }} >
  <path
    fillRule="evenodd"
    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
</svg><h1 className='text-white'>Back</h1>
                <h1 className="text-3xl font-bold text-center mb-8 text text-white">Yoga Classes at THE Yoga Academy</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {yogaClasses.map((yogaClass) => (
                        <div key={yogaClass.id} className="bg-gray-900 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl text-white font-semibold mb-2">{yogaClass.name}</h2>
                            <p className="text-white mb-2">Instructor: {yogaClass.instructor}</p>
                            <p className="text-white mb-2">Timing: {yogaClass.timing}</p>
                            <div className="mb-4 space-y-2">
                                <input type="text" name="name" value={formData[yogaClass.name]?.name} onChange={(e) => handleInputChange(e, yogaClass.name)} placeholder="Your Name" className="border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:border-blue-500" />
                                <input type="email" name="email" value={formData[yogaClass.name]?.email} onChange={(e) => handleInputChange(e, yogaClass.name)} placeholder="Your Email" className="border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:border-blue-500" />
                                <input type="tel" name="phoneNumber" value={formData[yogaClass.name]?.phoneNumber} onChange={(e) => handleInputChange(e, yogaClass.name)} placeholder="Your Phone Number" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="flex items-center mb-4">
    <button onClick={() => handleConfirmation(yogaClass.name)} className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Confirm</button>
    <div className="w-4"></div> 
    <button
        className={`bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300 ${confirmation[yogaClass.name] ? '' : 'opacity-50 cursor-not-allowed'}`}
        onClick={() => handleJoinClass(yogaClass.name)}
        disabled={!confirmation[yogaClass.name]}
    >
        Join
    </button>
</div>
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
