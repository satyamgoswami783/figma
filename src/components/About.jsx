import React from "react";

const About = () => {
    const teamMembers = [
        { name: "Jane Doe", role: "CEO & Founder", bio: "Jane is the creative force behind Furniro, with a passion for designing sustainable and stylish furniture.", image: "https://placehold.co/400x400/FFF/000?text=Jane" },
        { name: "John Smith", role: "Head of Design", bio: "John's expertise in minimalist design ensures every piece is both beautiful and functional.", image: "https://placehold.co/400x400/FFF/000?text=John" },
        { name: "Emily White", role: "Customer Relations", bio: "Emily is dedicated to ensuring a seamless experience for every customer, from order to delivery.", image: "https://placehold.co/400x400/FFF/000?text=Emily" },
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">
            <div className="relative h-96 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://placehold.co/1920x500/E3B16F/white?text=Our+Story+at+Furniro')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg md:text-xl font-light">Crafting a better world, one piece of furniture at a time.</p>
                </div>
            </div>
            <section className="container mx-auto py-16 px-4">
                <div className="md:flex md:items-center md:space-x-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold text-yellow-600">Our Story</h2>
                        <p className="mt-4 text-lg text-gray-700">
                            Furniro was born from a simple idea: to make high-quality, elegant furniture accessible to everyone. We noticed a gap in the market for pieces that were not only beautiful and durable but also sustainable. From our humble beginnings in a small workshop, we've grown into a brand dedicated to craftsmanship, community, and conscious living.
                        </p>
                        <p className="mt-4 text-lg text-gray-700">
                            Every piece we create tells a story of passion, meticulous care, and a commitment to protecting our planet. We source our materials ethically and partner with local artisans who share our vision. This allows us to ensure that every table, chair, and sofa is a work of art that you can feel good about owning.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 rounded-lg overflow-hidden shadow-lg">
                        <img src="https://placehold.co/600x400/E3B16F/white?text=Our+Story" alt="Our Story" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-yellow-600">Our Mission & Vision</h2>
                    <div className="md:flex md:space-x-8 mt-8 text-center">
                        <div className="flex-1 p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0">
                            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
                            <p className="mt-2 text-gray-600">
                                To provide thoughtfully designed furniture that elevates spaces and enriches lives, while maintaining an unwavering commitment to quality and sustainability.
                            </p>
                        </div>
                        <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
                            <p className="mt-2 text-gray-600">
                                To become a global leader in sustainable and stylish home furnishings, inspiring a future where design and environmental responsibility go hand in hand.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-yellow-600">Meet the Team</h2>
                    <p className="mt-2 text-lg text-gray-700">The passionate people behind Furniro.</p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover shadow-lg" />
                                <h4 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h4>
                                <p className="text-yellow-600 font-medium">{member.role}</p>
                                <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;