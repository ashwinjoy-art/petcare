import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[560px]" src={assets.about_image} alt=""/>
        <div className="text-justify flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            PetCare was created with a deep love for animals and a mission to
            provide pet owners with seamless access to trusted pet care
            services. Our platform connects you with experienced professionals
            for grooming, walking, training, sitting, and boarding, ensuring
            your furry companions receive the best care possible. Whether you're
            looking for a quick grooming session or long-term boarding, our
            services are designed to meet your pet’s needs with reliability and
            compassion. We believe every pet deserves top-quality care, and our
            platform makes it easier than ever to find and book services
            tailored to your pet’s well-being.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to enhance the lives of pets and their owners by
            offering a user-friendly, all-in-one platform for premium pet care
            services. We are dedicated to providing a safe, convenient, and
            trustworthy space where pet owners can connect with skilled
            professionals who share our passion for animal well-being.
          </p>
          <p>
            We believe that every pet deserves love, attention, and the highest
            level of care. Our goal is to build a strong community of pet lovers
            while ensuring ethical and compassionate service standards. Through
            our platform, we strive to make pet care more accessible,
            stress-free, and enjoyable for both pets and their owners.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-justify text-gray-600">
            Our commitment to excellence is unwavering. Every pet care service
            undergoes rigorous evaluation to ensure it meets the highest
            standards of safety, reliability, and compassion. We believe that
            quality is not just a feature—it’s the foundation of our platform,
            ensuring you can trust our services for your pet’s well-being.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-justify text-gray-600">
            We prioritize your experience with a user-friendly platform, easy
            booking options, and reliable service providers. Whether you’re
            scheduling an appointment or tracking your booking, we make the
            process smooth and hassle-free. Enjoy a seamless journey that allows
            you to focus on what matters most—your pet’s happiness.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-justify text-gray-600">
            Our dedicated support team is always ready to assist you. From
            answering service-related questions to resolving issues promptly, we
            ensure you receive the help you need. Your satisfaction is our
            priority, and we strive to create a positive experience every time
            you connect with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
