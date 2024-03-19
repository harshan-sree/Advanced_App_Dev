import React, { useState } from 'react';

const generateRandomUser = () => {
  return {
    name: 'Ajay',
    avatar: 'https://via.placeholder.com/150', // Placeholder image URL
    bio: 'Simply Good',
    email: 'ajay@gmail.com',
    location: 'Paapanaickenpalayam, USA',
    phone: '123-456-7890',
    password: '********', 
  };
};

const UserProfile = ({ user }) => {
  const [password, setPassword] = useState(user.password);
  const [phone, setPhone] = useState(user.phone);
  const [editMode, setEditMode] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSaveChanges = () => {
    // You can implement API calls here to save changes
    setEditMode(false);
    console.log('Changes saved:', { password, phone });
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-gray-600 p-8 rounded-lg shadow-lg">
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
        <div className="flex items-center justify-center mb-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
        </div>
        <div className="text-center">
          <h2 className=" text-white text-2xl font-semibold mb-2">{user.name}</h2>
          <p className="text-white text-sm">{user.bio}</p>
        </div>
        <div className="mt-4">
          <p className="text-white font-semibold">Email: {user.email}</p>
          {editMode ? (
            <>
              <div className="mt-2">
                <label className="text-white block text-whites font-semibold mb-1">New Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white"
                />
              </div>
              <div className="text-white mt-2">
                <label className="block text-white font-semibold mb-1">Phone Number:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white"
                />
              </div>
              <div className="mt-4">
                <button
                  onClick={handleSaveChanges}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-white font-semibold">Phone Number: {user.phone}</p>
              <p className="text-white font-semibold">Password: {user.password}</p>
              <button
                onClick={() => setEditMode(true)}
                className="mt-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const user = generateRandomUser();
  return <UserProfile user={user} />;
};

export default Profile;
