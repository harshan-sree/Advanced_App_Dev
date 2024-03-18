import React, { useState } from 'react'
import Navbarr from './Navbarr'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
          alert('Please fill in all fields');
          return;
        }
        setIsSubmitted(true);
      };
    
      return (
        <div className="bg-gray-600 bg-fixed min-h-screen"style={{ height: '110vh' }}>
          <Navbarr />
          <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-white mb-6">Contact THE Yoga Academy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-8">
                
                <h2 className="text-xl text-white font-bold mb-4">Reach Out to Us</h2>
                <p className="text-white mb-4">Have any questions or inquiries? Feel free to contact us using the information below:</p>
                <ul className="text-white">
                  <li className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    123 Yoga Avenue, SaiBaba Colony, Coimbatore, India.
                  </li>
                  <li className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13.5v5.753a2 2 0 002 2h14a2 2 0 002-2V13.5m-5.895-8.174l-1.105-1.658a2 2 0 00-3.789 0l-1.105 1.658M12 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    info@theYogaAcademy.com
                  </li>
                  <li className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v4m0 0v4m0-4h4m-4 0H3m12 8v.01M12 6v4m0 0v4m0-4h4m-4 0H4m16-4v16a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2z" />
                    </svg>
                    +91 1234567890
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-xl text-white font-bold mb-4">Send Us a Message  {isSubmitted && <p className="text-green-500 mt-4">Message sent successfully!</p>}</h2>
                <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500" />
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500" />
                  <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"></textarea>
                  <button type="submit" className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-bold uppercase hover:bg-yellow-400 transition duration-300">Send Message</button>
                </form>
               
              </div>
              
            </div>
          </div>
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
  )
}

export default ContactUs
