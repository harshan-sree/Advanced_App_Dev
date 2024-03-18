import React from 'react'

const Workshop = () => {
  return (
    <div className='bg-gray-700 min-h-screen'>
        <br></br>
    <div className="container  bg-gray-800 mx-auto py-8">
        
            <h1 className="text-3xl font-bold text-center mb-8 text-white">Wellness Workshops</h1>
            
            <div className="max-w-3xl mx-auto">
                <p className="text-white mb-4">Welcome to our wellness workshops at the Yoga Academy! Our workshops are designed to promote physical, mental, and emotional well-being through the practice of yoga and mindfulness.</p>
                <p className=" text-white mb-4">Below are some of the workshops we offer:</p>
                <ul className="list-disc pl-6 mb-4 text-white">
                    <li>Hatha Yoga Workshop</li>
                    <li>Vinyasa Flow Workshop</li>
                    <li>Yin Yoga Workshop</li>
                    <li>Meditation and Mindfulness Workshop</li>
                    <li>Pranayama (Breathwork) Workshop</li>
                </ul>
                <p className="text-white mb-4">Whether you're a beginner or an experienced practitioner, our workshops cater to individuals of all levels. Join us to deepen your practice, relax your mind, and rejuvenate your body.</p>
                <p className="text-white mb-4">Stay tuned for upcoming workshop dates and registration details!</p>
                <div className="flex justify-center mt-2">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="bi bi-arrow-left mr-2"
          viewBox="0 0 16 16"
          onClick={() => {
            window.history.back();
          }}
          style={{ cursor: 'pointer' }}
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
                    <h1 className="text-white cursor-pointer">Back</h1>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Workshop
