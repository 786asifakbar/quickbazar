// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="pt-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded" />
        <textarea placeholder="Your Message" className="p-3 border rounded h-32"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
