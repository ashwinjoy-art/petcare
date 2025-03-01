import React from 'react'
import { assets } from '../assets/assets'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      <h2 className='text-center text-2xl pt-10 text-[#707070]'>
        CONTACT <span className='text-gray-700 font-semibold'>US</span>
      </h2>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm px-6'>
        <img
          className='w-full md:max-w-[590px] lg:max-w-[600px] rounded-md shadow-lg'
          src={assets.contact_image}
          alt="Customer support team assisting pet service providers" loading="lazy"
        />
        <div className='flex flex-col justify-center items-start gap-6 max-w-md md:max-w-lg'>
          <p className='font-semibold text-lg text-gray-600'>Interested in Adding a Service?</p>
          <p className='text-gray-500'>
            If you'd like to add a service to our platform, please reach out to us using the contact details below. Our team will get back to you with more information.
          </p>
          <address className="text-gray-600 not-italic">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <p className='font-semibold text-md'>Email:</p>
            </div>
            <p className='text-gray-500'>
              <a href="mailto:support@petcare.com" className="hover:underline">
                support@petcare.com
              </a>
            </p>
            <div className="flex items-center gap-2 mt-4">
              <FaPhoneAlt />
              <p className='font-semibold text-md'>Phone:</p>
            </div>
            <p className='text-gray-500'>
              <a href="tel:+917025535627" className="hover:underline">
                +91 7025535627
              </a>
            </p>
            <div className="flex items-center gap-2 mt-4">
              <FaMapMarkerAlt />
              <p className='font-semibold text-md'>Office Location:</p>
            </div>
            <p className='text-gray-500'>
              54709 Lavender Building, Kollam, Kerala, India
            </p>
            <p className='font-semibold text-md mt-4'>Working Hours:</p>
            <p className='text-gray-500'>Monday - Friday: 9 AM - 6 PM</p>
          </address>
          <p className='text-gray-500 mt-6'>
            Please feel free to send us an Email, WhatsApp message, or call us for any inquiries or to discuss adding a service. We look forward to collaborating with you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:support@petcare.com">
              <button className='border border-black px-8 py-4 text-sm rounded-md hover:bg-black hover:text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gray-400'>
                Contact Us via Email
              </button>
            </a>
            <a href="https://wa.me/917025535627" target="_blank" rel="noopener noreferrer">
              <button className='flex items-center gap-2 border border-green-500 text-green-600 px-8 py-4 text-sm rounded-md hover:bg-green-500 hover:text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-green-400'>
                <FaWhatsapp /> Contact Us via WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
