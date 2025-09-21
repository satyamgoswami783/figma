import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "7b9e970a-73c1-4bb5-8fa5-7d4475c58af9");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        if (object.name.length < 3 || object.email.length < 5 || object.message.length < 3) {
            alert("Please enter valid details.");
            setIsSubmitting(false);
            return;
        }

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await res.json();

            if (result.success) {
                alert("Message sent successfully!");
                event.target.reset(); 
                navigate('/');
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">
            
            
            <div className="container mx-auto p-8 rounded-lg shadow-xl my-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-600">
                    Get in Touch
                </h1>

                <div className="flex flex-col md:flex-row justify-center items-start md:gap-16 gap-10">
                    <div className="left md:w-1/2 w-full flex flex-col">
                        <h2 className="text-3xl font-bold text-yellow-600 mb-4">
                            Let's Talk
                        </h2>
                        <p className="text-gray-600 mb-4 text-lg">
                            We'd love to hear from you. Whether you have a question about our products, need assistance with an order, or just want to say hello, we're here to help. Feel free to reach out anytime.
                        </p>
                        <ul className="space-y-4 text-gray-700 text-lg">
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12C12 12 2 18 2 19V21H22V19C22 18 12 12 12 12Z" />
                                    <path d="M12 11C15.3137 11 18 8.31371 18 5C18 1.68629 15.3137 -1 12 -1C8.68629 -1 6 1.68629 6 5C6 8.31371 8.68629 11 12 11Z" />
                                </svg>
                                contact@furniro.com
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.4857 2.03058L17.7262 4.27103L12.0125 9.98471L10.0384 10.1587L10.1587 10.0384L15.4857 2.03058Z" />
                                    <path d="M11.666 11.2335L2.03058 20.8689L3.10173 21.9398L12.7371 12.3043L11.666 11.2335Z" />
                                    <path d="M15.1581 18.0671L17.5133 19.3444C18.1147 19.6644 18.2325 20.4074 17.8465 20.9331C17.4604 21.4588 16.7351 21.6111 16.0369 21.1341L15.1581 18.0671Z" />
                                    <path d="M18.8105 13.9213L21.1657 15.1986C21.7671 15.5186 21.8849 16.2616 21.4989 16.7873C21.1128 17.313 20.3875 17.4654 19.6893 16.9884L18.8105 13.9213Z" />
                                    <path d="M11.597 19.2227L13.9523 20.5001C14.5536 20.8201 14.6715 21.5631 14.2854 22.0888C13.8994 22.6145 13.1741 22.7668 12.4758 22.2898L11.597 19.2227Z" />
                                </svg>
                                +91 12345-67890
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" />
                                    <path d="M12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11Z" />
                                    <path d="M12 7.00001C12.5523 7.00001 13 6.55229 13 6.00001C13 5.44772 12.5523 5.00001 12 5.00001C11.4477 5.00001 11 5.44772 11 6.00001C11 6.55229 11.4477 7.00001 12 7.00001Z" />
                                </svg>
                                123 Furniro Street, City, Country
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={onSubmit} className="right flex flex-col md:w-1/2 w-full gap-5 bg-white p-6 rounded-lg shadow-md">
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 font-medium">Your Name</label>
                            <input
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 font-medium">Your Email</label>
                            <input
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 font-medium">Write your message here</label>
                            <textarea
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                                name="message"
                                id="message"
                                placeholder="Enter your message"
                                rows={5}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`px-6 py-3 mt-4 w-48 rounded-full font-semibold text-white transition-all duration-300 ease-in-out
                            ${isSubmitting ? 'bg-yellow-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-700'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Now'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;