import { Link } from "react-router-dom";

function CollegeCard({ college }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={college.image}
        alt={college.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold mb-2">
          {college.name}
        </h2>

        <p className="mb-2 text-gray-600">
          📍 {college.location}
        </p>

        <p className="mb-2">
          💰 Fees: {college.fees}
        </p>

        <p className="mb-2">
          ⭐ Rating: {college.rating}
        </p>

        <p className="mb-4">
          📈 Placements: {college.placements}
        </p>

        <Link
          to="/college-details"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default CollegeCard;