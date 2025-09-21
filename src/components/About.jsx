import React from "react";

const About = () => {
  const teamMembers = [
    { name: "Jane Doe", role: "CEO & Founder", bio: "Jane is the creative force behind Furniro, with a passion for designing sustainable and stylish furniture.", image: "https://placehold.co/400x400/FFF/000?text=Jane" },
    { name: "John Smith", role: "Head of Design", bio: "John's expertise in minimalist design ensures every piece is both beautiful and functional.", image: "https://placehold.co/400x400/FFF/000?text=John" },
    { name: "Emily White", role: "Customer Relations", bio: "Emily is dedicated to ensuring a seamless experience for every customer, from order to delivery.", image: "https://placehold.co/400x400/FFF/000?text=Emily" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center">
        <img
          src="https://placehold.co/1920x500/E3B16F/white?text=Our+Story+at+Furniro"
          alt="Our Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">About Us</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">Crafting a better world, one piece of furniture at a time.</p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="container mx-auto py-16 px-4 md:flex md:items-center md:space-x-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-600 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            Furniro was born from a simple idea: to make high-quality, elegant furniture accessible to everyone. We noticed a gap in the market for pieces that were not only beautiful and durable but also sustainable.
          </p>
          <p className="text-lg text-gray-700">
            Every piece we create tells a story of passion, meticulous care, and a commitment to protecting our planet. We source our materials ethically and partner with local artisans who share our vision.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
          <img
            src="https://placehold.co/600x400/E3B16F/white?text=Our+Story"
            alt="Our Story"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-600">Our Mission & Vision</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide thoughtfully designed furniture that elevates spaces and enriches lives, while maintaining an unwavering commitment to quality and sustainability.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become a global leader in sustainable and stylish home furnishings, inspiring a future where design and environmental responsibility go hand in hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-600">Meet the Team</h2>
          <p className="mt-2 text-lg text-gray-700">The passionate people behind Furniro.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mb-4 shadow-md"
                />
                <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
                <p className="text-yellow-600 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
