import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
      <p>&copy; 2024 Your Website</p>
      <div className="mt-2">
        <a href="https://example.com/terms_and_conditions" className="text-blue-300 hover:text-blue-400 mr-4">Terms & Conditions</a>
        <a href="https://example.com/privacy_policy" className="text-blue-300 hover:text-blue-400">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
