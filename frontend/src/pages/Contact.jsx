import React from 'react'
import { assets } from '../assets/assets'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[460px]' src={assets.contact_image} alt="Contact Image" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Interested in Adding a Service?</p>
          <p className='text-gray-500'>
            If you'd like to add a service to our platform, please reach out to us using the contact details below. Our team will get back to you with more information.
          </p>
          <div className="text-gray-600">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <p className='font-semibold text-md'>Email:</p>
            </div>
            <p className='text-gray-500'>support@petcare.com</p>
            <div className="flex items-center gap-2 mt-4">
              <FaPhoneAlt />
              <p className='font-semibold text-md'>Phone:</p>
            </div>
            <p className='text-gray-500'>+91 7025535627</p>
            <div className="flex items-center gap-2 mt-4">
              <FaMapMarkerAlt />
              <p className='font-semibold text-md'>Office Location:</p>
            </div>
            <p className='text-gray-500'>54709 Lavender Buildng, Kottappuram, Kerala, India</p>
            <p className='font-semibold text-md mt-4'>Working Hours:</p>
            <p className='text-gray-500'>Monday - Friday: 9 AM - 6 PM</p>
          </div>
          <p className='text-gray-500 mt-6'>
            Please feel free to send us an email or call us for any inquiries or to discuss adding a service. We look forward to collaborating with you!
          </p>
          <a href="mailto:support@petcare.com">
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
              Contact Us via Email
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
