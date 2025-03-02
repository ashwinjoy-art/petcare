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
        <Link to="/services" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
        Book Appointment
        <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
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
    </div>
  );
};

export default Header;
