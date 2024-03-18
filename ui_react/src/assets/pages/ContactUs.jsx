import React from 'react'
import Navbarr from './Navbarr'

const ContactUs = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbarr/>
      <div className='container mx-auto py-12'>
        <h1 className='text-3xl font-bold text-white mb-6'>Contact THE Yoga Academy</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white rounded-lg p-8'>
            <h2 className='text-xl font-bold mb-4'>Reach Out to Us</h2>
            <p className='text-gray-800 mb-4'>Have any questions or inquiries? Feel free to contact us using the information below:</p>
            <ul className='text-gray-800'>
              <li className='flex items-center mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                123 Yoga Avenue, SaiBaba Colony, Coimbatore, India.
              </li>
              <li className='flex items-center mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13.5v5.753a2 2 0 002 2h14a2 2 0 002-2V13.5m-5.895-8.174l-1.105-1.658a2 2 0 00-3.789 0l-1.105 1.658M12 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                info@theYogaAcademy.com
              </li>
              <li className='flex items-center mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v4m0 0v4m0-4h4m-4 0H3m12 8v.01M12 6v4m0 0v4m0-4h4m-4 0H4m16-4v16a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2z" />
                </svg>
                +91 1234567890
              </li>
            </ul>
          </div>
          <div className='bg-white rounded-lg p-8'>
            <h2 className='text-xl font-bold mb-4'>Send Us a Message</h2>
            <form className='grid grid-cols-1 gap-4'>
              <input type='text' placeholder='Your Name' className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500' />
              <input type='email' placeholder='Your Email' className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500' />
              <textarea placeholder='Your Message' rows='5' className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500'></textarea>
              <button type='submit' className='bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ContactUs
