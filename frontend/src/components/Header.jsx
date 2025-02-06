import React from "react";
import {Link} from 'react-router-dom'
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap">
      {/* ---------Left Side---------- */}
      <div className="flex flex-col items-start justify-center gap-4 bg-primary rounded-lg px-6 md:px-10 lg:px-20 md:w-1/2 h-[500px] md:h-[500px]">
        <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight">
          Care Beyond Companionship:
          <br /> Groom, Walk, Train <br /> - All in One Place!
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p className="text-white text-sm md:text-base">
            Because Every Pet Deserves the Best Care, <br /> Every Step of the
            Way.
          </p>
        </div>
        <Link to="/services" className="flex items-center text-white font-semibold text-sm md:text-base">
        Book Appointment
        <img className="ml-2 w-4 md:w-6" src={assets.arrow_icon} alt="Arrow Icon" />
        </Link>
      </div>
      {/* ----------Right Side-------- */}
      <div className="md:w-1/2">
        <img
          className="w-full h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>

{/* Pet Care Solutions */}
<section className="px-6 py-12 bg-white w-full">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold text-center mb-8">
      Our Pet Care Solutions
    </h2>
    <div className="grid gap-6">
      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
        {[
          {
            title: "Pet Boarding",
            description: "Safe and comfortable stay for your pets.",
            icon: "\u{1F43E}",
          },
          {
            title: "Dog Walking",
            description: "Daily exercise to keep your dog healthy.",
            icon: "\u{1F415}",
          },
          {
            title: "Grooming & Spa",
            description: "Keeping your pet looking their best.",
            icon: "\u{1F9F4}",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 text-center"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center gap-6">
        {[
          {
            title: "Pet Training",
            description: "Professional training for all breeds.",
            icon: "\u{1F4AA}",
          },
          {
            title: "Pet Sitting",
            description: "Care for your pet when you're away.",
            icon: "\u{1F408}",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 text-center"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Header;
