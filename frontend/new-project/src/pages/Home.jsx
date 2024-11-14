// src/pages/Home.jsx

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col items-center justify-center text-white px-6 md:px-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('undraw.png')" // Replace with your image URL
        }}
      >
        <div className="text-center max-w-3xl text-gray-700">
          <h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold mb-6 animate-fade-in"
            style={{ textShadow: "4px 4px 6px rgba(128, 0, 128, 0.7)" }} // Purple shadow
          >
            Welcome to <br /><span className="text-blue-700">Quick Bazar</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-8 opacity-90 text-gray-700">
          </p>
          <button className="bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 shadow-lg">
            Start Shopping
          </button>
        </div>
      </section>

      {/* Other sections */}
      {/* ... */}
    </div>
  );
};

export default Home;
