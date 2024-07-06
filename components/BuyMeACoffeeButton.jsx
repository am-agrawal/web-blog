import React from 'react';
import CoffeeIcon from '../assets/icons/coffee.svg';

const BuyMeACoffeeButton = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/amanagrawal"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-4 py-2 bg-violet-700 text-white font-bold rounded hover:bg-violet-800 transition duration-300"
    >
      <CoffeeIcon className='h-6 w-6 mr-2' />
      Buy Me A Coffee
    </a>
  );
};

export default BuyMeACoffeeButton;
