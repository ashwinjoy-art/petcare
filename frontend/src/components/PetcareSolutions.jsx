import React from "react";

const PetcareSolutions = () => {
  const services = [
    { title: "Pet Boarding", description: "Safe and comfortable stay for your pets.", icon: "🐾" },
    { title: "Dog Walking", description: "Daily exercise to keep your dog healthy.", icon: "🐕" },
    { title: "Grooming & Spa", description: "Keeping your pet looking their best.", icon: "🛁" }
  ];

  const secondaryServices = [
    { title: "Pet Training", description: "Professional training for all breeds.", icon: "💪" },
    { title: "Pet Sitting", description: "Care for your pet when you're away.", icon: "🐈" }
  ];

  return (
    <section className="px-6 py-12 bg-white w-full">
      <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
        <h1 className="text-3xl font-medium">
          Our Pet Care Solutions
        </h1>
        <p className="sm:w-2/3 text-center text-sm">
          Explore our wide range of pet care services tailored to meet your pet's needs.
        </p>
        <div className="grid gap-6">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 text-center">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Second Row - Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ width: "66.666%" }}>
              {secondaryServices.map((service, index) => (
                <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50 text-center w-full">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetcareSolutions;