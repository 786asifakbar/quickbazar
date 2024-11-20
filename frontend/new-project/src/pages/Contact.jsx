import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="pt-20 container mx-auto px-4 lg:px-20">
      <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
        Get in Touch
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </p>

      <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here"
              className="w-full p-4 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
