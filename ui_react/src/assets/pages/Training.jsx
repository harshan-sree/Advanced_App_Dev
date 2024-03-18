// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const Training = () => {
//     const navigate = useNavigate();

//     const handleBookSlot = (programDetails) => {
//         navigate(`/book-slot/${programDetails.programName}`, { state: programDetails });
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Yoga Teacher Training Programs</h1>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 <li className="bg-white p-6 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-2">200-hour Yoga Teacher Training</h2>
//                     <p className="text-gray-600">Duration: 4 weeks</p>
//                     <p className="text-gray-600">Location: Yoga Studio XYZ</p>
//                     <p className="text-gray-600">Start Date: August 1, 2024</p>
//                     <button
//                         onClick={() => handleBookSlot({
//                             programName: '200-hour Yoga Teacher Training',
//                             duration: '4 weeks',
//                             location: 'Yoga Studio XYZ',
//                             startDate: 'August 1, 2024'
//                         })}
//                         className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 block w-full text-center"
//                     >
//                         Book Slot
//                     </button>
//                 </li>
//                 <li className="bg-white p-6 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-2">300-hour Yoga Teacher Training</h2>
//                     <p className="text-gray-600">Duration: 6 weeks</p>
//                     <p className="text-gray-600">Location: Yoga Studio ABC</p>
//                     <p className="text-gray-600">Start Date: September 15, 2024</p>
//                     <button
//                         onClick={() => handleBookSlot({
//                             programName: '300-hour Yoga Teacher Training',
//                             duration: '6 weeks',
//                             location: 'Yoga Studio ABC',
//                             startDate: 'September 15, 2024'
//                         })}
//                         className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 block w-full text-center"
//                     >
//                         Book Slot
//                     </button>
//                 </li>
//                 <li className="bg-white p-6 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-2">500-hour Yoga Teacher Training</h2>
//                     <p className="text-gray-600">Duration: 10 weeks</p>
//                     <p className="text-gray-600">Location: Yoga Studio PQR</p>
//                     <p className="text-gray-600">Start Date: October 10, 2024</p>
//                     <button
//                         onClick={() => handleBookSlot({
//                             programName: '500-hour Yoga Teacher Training',
//                             duration: '10 weeks',
//                             location: 'Yoga Studio PQR',
//                             startDate: 'October 10, 2024'
//                         })}
//                         className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 block w-full text-center"
//                     >
//                         Book Slot
//                     </button>
//                 </li>
//                 <li className="bg-white p-6 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-2">1000-hour Yoga Teacher Training</h2>
//                     <p className="text-gray-600">Duration: 24 weeks</p>
//                     <p className="text-gray-600">Location: Yoga Studio LMN</p>
//                     <p className="text-gray-600">Start Date: November 5, 2024</p>
//                     <button
//                         onClick={() => handleBookSlot({
//                             programName: '1000-hour Yoga Teacher Training',
//                             duration: '24 weeks',
//                             location: 'Yoga Studio LMN',
//                             startDate: 'November 5, 2024'
//                         })}
//                         className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 block w-full text-center"
//                     >
//                         Book Slot
//                     </button>
//                 </li>
//             </ul>
//         </div>
//   )
// }

// export default Training


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Training = () => {
    const navigate = useNavigate();

    const handleBookSlot = (programDetails) => {
        navigate(`/book-slot/${programDetails.programName}`, { state: programDetails });
    };

    return (
        <div className='bg-gray-700'>
            
        <div className="container bg-gray-700 mx-auto py-8 min-h-screen">
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
            <h1 className="text-3xl font-bold text-center mb-8 text-white">Yoga Teacher Training Programs</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <li className="bg-gray-900 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl text-white font-semibold mb-2">200-hour Yoga Teacher Training</h2>
                    <p className="text-white">Duration: 4 weeks</p>
                    <p className="text-white">Location: Yoga Studio XYZ</p>
                    <p className="text-white">Start Date: August 1, 2024</p>
                    <button
                        onClick={() => handleBookSlot({
                            programName: '200-hour Yoga Teacher Training',
                            duration: '4 weeks',
                            location: 'Yoga Studio XYZ',
                            startDate: 'August 1, 2024'
                        })}
                        className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300 mt-4 block w-full text-center"
                    >
                        Book Slot
                    </button>
                </li>
                <li className="bg-gray-900 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl text-white font-semibold mb-2">300-hour Yoga Teacher Training</h2>
                    <p className="text-white">Duration: 6 weeks</p>
                    <p className="text-white">Location: Yoga Studio ABC</p>
                    <p className="text-white">Start Date: September 15, 2024</p>
                    <button
                        onClick={() => handleBookSlot({
                            programName: '300-hour Yoga Teacher Training',
                            duration: '6 weeks',
                            location: 'Yoga Studio ABC',
                            startDate: 'September 15, 2024'
                        })}
                        className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300 mt-4 block w-full text-center"
                    >
                        Book Slot
                    </button>
                </li>
                <li className="bg-gray-900 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl text-white font-semibold mb-2">500-hour Yoga Teacher Training</h2>
                    <p className="text-white">Duration: 10 weeks</p>
                    <p className="text-white">Location: Yoga Studio PQR</p>
                    <p className="text-white">Start Date: October 10, 2024</p>
                    <button
                        onClick={() => handleBookSlot({
                            programName: '500-hour Yoga Teacher Training',
                            duration: '10 weeks',
                            location: 'Yoga Studio PQR',
                            startDate: 'October 10, 2024'
                        })}
                        className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300 mt-4 block w-full text-center"
                    >
                        Book Slot
                    </button>
                </li>
                <li className="bg-gray-900 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl text-white font-semibold mb-2">1000-hour Yoga Teacher Training</h2>
                    <p className="text-white">Duration: 24 weeks</p>
                    <p className="text-white">Location: Yoga Studio LMN</p>
                    <p className="text-white">Start Date: November 5, 2024</p>
                    <button
                        onClick={() => handleBookSlot({
                            programName: '1000-hour Yoga Teacher Training',
                            duration: '24 weeks',
                            location: 'Yoga Studio LMN',
                            startDate: 'November 5, 2024'
                        })}
                        className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300 mt-4 block w-full text-center"
                    >
                        Book Slot
                    </button>
                </li>
               
            </ul>
        </div>
        </div>
    );
};

export default Training;
