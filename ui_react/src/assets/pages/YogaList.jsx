import React, { useState } from 'react'

const YogaList = () => {
  // Sample initial yoga classes data
  const initialYogaClasses = [
    { id: 1, name: 'Hatha Yoga', instructor: 'John Doe', timing: 'Monday, Friday - 10:00 AM to 11:30 AM' },
    { id: 2, name: 'Vinyasa Flow', instructor: 'Jane Smith', timing: 'Tuesday, Thursday - 6:00 PM to 7:30 PM' },
    { id: 3, name: 'Power Yoga', instructor: 'Alice Johnson', timing: 'Sunday, Monday - 6:00 AM to 7:30 AM' }
  ];

  const [yogaClasses, setYogaClasses] = useState(initialYogaClasses);

  const addYogaClass = () => {
    // Implement logic to add a new yoga class
    // You would typically interact with backend APIs here
  };

  const updateYogaClass = (id, newData) => {
    // Implement logic to update a yoga class
    // You would typically interact with backend APIs here
  };

  const deleteYogaClass = (id) => {
    // Implement logic to delete a yoga class
    // You would typically interact with backend APIs here
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800">Yoga Classes</h1>
      <div className="mt-8 flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={addYogaClass}>Add New Yoga Class</button>
      </div>
      
      {yogaClasses.map((yogaClass) => (
        <div key={yogaClass.id} className="mt-4">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{yogaClass.name}</h3>
              
              <div className="flex mt-2">
                <button className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                <button className="mr-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Update</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => deleteYogaClass(yogaClass.id)}>Delete</button>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Instructor</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{yogaClass.instructor}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Timing</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{yogaClass.timing}</dd>
                </div>
              </dl>
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
        </div>
      ))}
     
    </div>
  )
}

export default YogaList
