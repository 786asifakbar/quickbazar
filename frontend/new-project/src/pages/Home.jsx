// src/pages/Home.jsx


const Home = () => {
  return (
    <div className="pt-20">
      <section className="bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('https://via.placeholder.com/1200')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to QuickBazar</h1>
          <p className="text-xl mb-6">Your one-stop shop for all your needs</p>
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg hover:bg-yellow-500">Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
