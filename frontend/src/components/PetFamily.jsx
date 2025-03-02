import React from "react";
import { assets } from "../assets/assets"; 

const PetFamily = () => {
  return (
    <section className="text-[#262626] py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
        <h1 className="text-3xl font-medium">Our Pet Care Family in Pictures</h1>
        <p className="sm:w-2/3 text-center text-sm">A Glimpse into the Joyful Moments We Share with Your Beloved Pets</p>
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
