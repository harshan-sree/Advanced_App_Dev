// import React from 'react'
// import Navbar from '../Navbar'

// const Home = () => {
//   return (
//     <div> <Navbar />
//     <div className="text-yellow-500">

//     </div>

//     </div>
//   )
// }

// export default Home

import React from 'react';
import Navbar from '../Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen-200 overflow-y-auto">
        <div className="container mx-auto">
          <section className="py-16 text-center bg-gray-800 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to THE Yoga Academy</h1>
            <p className="text-lg mb-8">Embark on a journey to wellness and self-discovery.</p>
            <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Get Started</button>
          </section>

          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="max-w-3xl mx-auto mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam felis. Phasellus at tristique justo. Morbi suscipit, lectus a fringilla ultrices, nunc nisl efficitur eros, vel finibus lectus lectus ac enim.</p>
            <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Learn More</button>
          </section>

          <section className="py-16 text-center bg-gray-800 text-white">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Yoga Classes</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Explore</button>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Meditation Sessions</h3>
                <p className="mb-4">Sed et diam felis. Phasellus at tristique justo.</p>
                <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Explore</button>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Wellness Workshops</h3>
                <p className="mb-4">Morbi suscipit, lectus a fringilla ultrices.</p>
                <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Explore</button>
              </div>
            </div>
          </section>

          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg mb-4">
                <p className="mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam felis. Phasellus at tristique justo."</p>
                <p className="font-bold">- John Doe</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="mb-4">"Morbi suscipit, lectus a fringilla ultrices, nunc nisl efficitur eros, vel finibus lectus lectus ac enim."</p>
                <p className="font-bold">- Jane Doe</p>
              </div>
            </div>
          </section>

          <section className="py-16 text-center bg-gray-800 text-white">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="max-w-lg mx-auto mb-8">Have questions or want to get started? Contact us now!</p>
            <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Contact Us</button>
          </section>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-20 bg-gray-800"></div>
      <br></br><br></br><br></br><br></br><br></br>
    </div>
  )
}

export default Home
