import React from 'react';
import Navbarr from './Navbarr';

const AboutUs = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbarr />
      <br />
      <div className='container bg-gray-800 mx-auto py-12'>
        <h1 className='text-3xl font-bold text-white mb-4'>About THE Yoga Academy</h1>
        <p className='text-white mb-4'>
          Welcome to "THE" Yoga Academy, where we believe in the transformative power of yoga. Our mission is to provide a nurturing environment where students of all levels can explore the benefits of yoga and cultivate a deeper connection with themselves.
        </p>
        <p className='text-white mb-4'>
          At "THE" Yoga Academy, we offer a diverse range of classes led by experienced instructors who are dedicated to guiding students on their yoga journey. Whether you're a beginner or an advanced practitioner, there's something for everyone at our academy.
        </p>
        <p className='text-white mb-4'>
          Our state-of-the-art facilities are designed to enhance your yoga experience, with spacious studios, comfortable amenities, and a welcoming atmosphere. We believe in creating a supportive community where students can feel inspired, empowered, and uplifted.
        </p>
        <p className='text-white mb-4'>
          In addition to our regular classes, we also conduct comprehensive teacher training programs for those who aspire to become certified yoga instructors. Our programs are led by highly qualified trainers and provide a deep dive into yoga philosophy, anatomy, teaching methodology, and more. Whether you're looking to deepen your practice or pursue a career in yoga instruction, our teacher training programs offer a transformative experience.
        </p>
        <p className='text-white mb-4'>
          Join us at THE Yoga Academy and discover the joy of yoga as you embark on a path of self-discovery, health, and well-being. Namaste.
        </p>
      </div>

      <div className="fixed bottom-81 left-0 w-full flex justify-center items-center py-4 ">
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
        <h1 className='text-white'>Back</h1>
      </div>
    </div>
  );
};

export default AboutUs;
