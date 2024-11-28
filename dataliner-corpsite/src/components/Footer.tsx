import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-inner">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} DataLiner. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
