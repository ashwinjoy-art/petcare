import React from "react";
import { assets } from "../assets/assets"; 

const PetFamily = () => {
  return (
    <section className="text-[#262626] py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Pet Care Family in Pictures</h2>
        <p className="text-gray-600 mt-2">A Glimpse into the Joyful Moments We Share with Your Beloved Pets</p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <img className="w-full h-auto rounded-lg" src={assets.petfamily1} alt="Pet" />
        <img className="w-full h-auto rounded-lg" src={assets.petfamily2} alt="Pet" />
        <img className="w-full h-auto rounded-lg" src={assets.petfamily3} alt="Pet" />
        <img className="w-full h-auto rounded-lg" src={assets.petfamily4} alt="Pet" />
      </div>
    </section>
  );
};

export default PetFamily;
