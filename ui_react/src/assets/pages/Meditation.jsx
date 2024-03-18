import React from 'react'

const Meditation = () => {
  return (
    <div className='bg-gray-800'>
    <div className=" bg-gray-800 container mx-auto py-8 ">
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
    <h1 className="text-3xl font-bold text-center mb-8 text-white">Meditation Sessions</h1>
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">About Meditation Sessions</h2>
        <p className="text-white mb-4">
            Meditation sessions offer a tranquil space for individuals to cultivate mindfulness, reduce stress, and enhance overall well-being. 
            Whether you're new to meditation or have an established practice, our sessions cater to all levels.
        </p>
        <p className="text-white mb-4">
            During our yoga classes, we integrate meditation sessions to provide a holistic approach to health and wellness.
        </p>
    </div>
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">Benefits of Meditation</h2>
        <ul className="list-disc list-inside text-white">
            <li>Reduces stress and anxiety</li>
            <li>Enhances emotional well-being</li>
            <li>Improves focus and concentration</li>
            <li>Promotes better sleep</li>
            <li>Fosters a greater sense of inner peace</li>
        </ul>
    </div>
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">What to Expect</h2>
        <p className="text-white mb-4">
            Our meditation sessions typically last between 30 to 60 minutes. You'll be guided through a series of mindfulness exercises, 
            followed by a period of silent meditation. 
        </p>
        <p className="text-white mb-4">
            Sessions are conducted in a quiet, comfortable environment, allowing you to fully immerse yourself in the practice.
        </p>
    </div>
    <div>
        <h2 className="text-xl font-semibold mb-4 text-white">Joining a Session</h2>
        <p className="text-white mb-4">
            Our meditation sessions are open to all individuals, regardless of experience level. 
            To join a session, simply check our schedule for upcoming yoga classes with integrated meditation sessions and reserve your spot.
        </p>
        <p className="text-white mb-4">
            We recommend arriving a few minutes early to settle in and prepare for the practice.
        </p>
        <p className="text-white mb-4">
            For more information or to reserve your spot, please contact us at <span className="text-blue-500">info@example.com</span> or call <span className="text-blue-500">123-456-7890</span>.
        </p>
        <br></br><br></br><br></br>
    </div>
</div>
</div>

  )
}

export default Meditation
