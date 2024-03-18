import React from 'react'

const UserList = () => {
    const users = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          phoneNumber: '+1234567890',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          phoneNumber: '+9876543210',
        },
        {
          id: 3,
          name: 'Alice Johnson',
          email: 'alice@example.com',
          phoneNumber: '+2468135790',
        },
      ];
    
      return  (
        <div className="container mx-auto py-8 h-screen overflow-y-auto" style={{ height: '120vh' }}>
          <h1 className="text-3xl font-semibold text-gray-800">User List</h1>
    
          <div className="mt-8">
            {users.map((user) => (
              <div key={user.id} className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{user.name}</h3>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.email}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.phoneNumber}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
     
        </div>
  )
}

export default UserList
