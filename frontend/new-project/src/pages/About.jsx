import React from "react";

const About = () => {
  return (
    <div className="pt-20 container mx-auto px-4 lg:px-20">
      {/* Hero Section */}
      <div className="bg-blue-100 p-8 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">About QuickBazar</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At QuickBazar, we redefine online shopping by connecting you to a world of endless possibilities. 
          From trendy fashion to cutting-edge electronics, we deliver convenience and value straight to your doorstep.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To empower customers by offering them a seamless online shopping experience. 
            We strive to bring the best products at unbeatable prices while ensuring customer satisfaction at every step.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become a global leader in e-commerce by fostering innovation, trust, and exceptional customer service. 
            We envision QuickBazar as a platform that simplifies lives and builds lasting relationships with our users.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-center text-blue-600 mb-6">Why Choose QuickBazar?</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="text-center p-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Quality Products"
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-bold">Quality Products</h4>
            <p className="text-gray-700">We handpick products from trusted suppliers to ensure the highest quality.</p>
          </div>
          <div className="text-center p-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Affordable Prices"
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-bold">Affordable Prices</h4>
            <p className="text-gray-700">Get the best value for your money with our unbeatable prices.</p>
          </div>
          <div className="text-center p-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Fast Delivery"
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-bold">Fast Delivery</h4>
            <p className="text-gray-700">Enjoy quick and reliable shipping to your doorstep.</p>
          </div>
          <div className="text-center p-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Secure Payment"
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-bold">Secure Payment</h4>
            <p className="text-gray-700">Shop confidently with our safe and secure payment methods.</p>
          </div>
          <div className="text-center p-4">
            <img
              src="https://via.placeholder.com/100"
              alt="24/7 Support"
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-bold">24/7 Support</h4>
            <p className="text-gray-700">Our support team is here to assist you at any time.</p>
          </div>
          <div className="text-center p-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Easy Returns"
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-bold">Easy Returns</h4>
            <p className="text-gray-700">Hassle-free return policies for your convenience.</p>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Join the QuickBazar Family</h3>
        <p className="text-gray-700 leading-relaxed">
          Experience the joy of online shopping like never before. Shop with us and let us make your life easier, one product at a time!
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
          Start Shopping Now
        </button>
      </div>
    </div>
  );
};

export default About;
