import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-red-800 dark:bg-red-950 py-6 mt-10">
      <div className="max-w-screen-xl mx-auto text-center text-white text-sm md:text-base">
        <p>&copy; {new Date().getFullYear()} Instant Blood Donor Finder. All rights reserved.</p>
        <p className="mt-2">Designed with ❤️ for a life-saving cause.</p>
      </div>
    </footer>
  );
};

export default Footer;
