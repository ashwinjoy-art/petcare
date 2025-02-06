import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="PetCare Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            PetCare is dedicated to providing top-quality pet care services, ensuring the well-being and happiness of your furry friends. From veterinary services to pet grooming and training, we cater to all your pet's needs with love and expertise.
          </p>
        </div>
        
        <div>
          <p className='text-xl font-medium mb-5'>ABOUT US</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>Our Services</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div>
          <p className='text-xl font-medium mb-5'>CONTACT US</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 7025535627</li>
            <li>support@petcare.com</li>
            <li>54709 Lavender Building,</li>
            <li>Kollam, Kerala, India</li>
          </ul>
        </div>
        
      </div>
      
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @ PetCare.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
