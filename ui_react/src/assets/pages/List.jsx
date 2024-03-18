import React, { useState } from 'react';

const List = () => {
  // Sample initial training programs data
  const initialTrainingPrograms = [
    {
      id: 1,
      title: '200-hour Yoga Teacher Training',
      duration: '4 weeks',
      location: 'Yoga Studio XYZ',
      startDate: 'August 1, 2024'
    },
    {
      id: 2,
      title: '300-hour Yoga Teacher Training',
      duration: '6 weeks',
      location: 'Yoga Studio ABC',
      startDate: 'September 15, 2024'
    },
    {
      id: 3,
      title: '500-hour Yoga Teacher Training',
      duration: '10 weeks',
      location: 'Yoga Studio PQR',
      startDate: 'October 10, 2024'
    },
    {
      id: 4,
      title: '1000-hour Yoga Teacher Training',
      duration: '24 weeks',
      location: 'Yoga Studio LMN',
      startDate: 'November 5, 2024'
    }
  ];

  const [trainingPrograms, setTrainingPrograms] = useState(initialTrainingPrograms);

  const addTrainingProgram = () => {
    // Implement logic to add a new training program
    // You would typically interact with backend APIs here
  };

  const updateTrainingProgram = (id, newData) => {
    // Implement logic to update a training program
    // You would typically interact with backend APIs here
  };

  const deleteTrainingProgram = (id) => {
    // Implement logic to delete a training program
    // You would typically interact with backend APIs here
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800">Training Programs</h1>
      <div className="mt-8 flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={addTrainingProgram}>Add New Training Program</button>
      </div>
      
      {trainingPrograms.map((program) => (
        <div key={program.id} className="mt-4">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{program.title}</h3>
              
              <div className="flex mt-2">
                <button className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                <button className="mr-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Update</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => deleteTrainingProgram(program.id)}>Delete</button>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Duration</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{program.duration}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Location</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{program.location}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Start Date</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{program.startDate}</dd>
                </div>
              </dl>
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
        </div>
      ))}
     
    </div>
  );
};

export default List;
