import React from 'react'
import Navbarr from './Navbarr'
import vid from'./yoga.mp4'
const UserDash = () => {
  return (
    <div className='bg-black'>
    <Navbarr /><br></br>
    <div className="relative">
      <video className="w-full h-screen object-cover" autoPlay loop muted>
        <source src={vid} type="video/mp4" />
       
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to THE Yoga Academy</h1>
          <p className="text-lg mb-8">Embark on a journey to wellness and self-discovery.</p>
          <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Get Started</button>
        </div>
      </div>
    </div>

    <div className="container mx-auto py-16">
      <section className="py-16 text-center bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="max-w-3xl mx-auto mb-8">Welcome to our Yoga Academy, where tranquility meets transformation. Join us on the path to holistic well-being and self-discovery.</p>
        <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Learn More</button>
      </section>

      <section className="py-16 text-center bg-gray-800 text-white">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Yoga Classes</h3>
              <p className="mb-4">Find your balance, strength, and inner peace on the mat.</p>
              <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Explore</button>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Meditation Sessions</h3>
              <p className="mb-4">Discover the stillness within, as each breath guides you to a place of serenity.</p>
              <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Explore</button>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Wellness Workshops</h3>
              <p className="mb-4">Empower yourself with knowledge, nourish your body, and nurture your spirit.</p>
              <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Explore</button>
            </div>
          </div>
        </section>

      <section className="py-16 text-center">
         <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
           <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg mb-4 text-white">
             <p className="mb-4">"The Yoga Academy surpassed my expectations with knowledgeable instructors and a welcoming atmosphere, making my journey towards inner peace and physical strength truly fulfilling."</p>
              <p className="font-bold">- Harshan</p>
            </div>
         
          </div>
         </section>
    </div>
  </div>
  )
}

export default UserDash
