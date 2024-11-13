// src/pages/NotFound.js
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
