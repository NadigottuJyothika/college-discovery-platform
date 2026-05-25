import colleges from "../data/colleges";

function CollegeDetailsPage() {
  const college = colleges[0];

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        {college.name}
      </h1>

      <p className="mb-4">
        {college.overview}
      </p>

      <p className="mb-4">
        📍 Location: {college.location}
      </p>

      <p className="mb-4">
        💰 Fees: {college.fees}
      </p>

      <p className="mb-4">
        ⭐ Rating: {college.rating}
      </p>

      <p className="mb-4">
        📈 Placements: {college.placements}
      </p>

      <div>
        <h2 className="text-2xl font-bold mb-3">
          Courses
        </h2>

        <ul className="list-disc ml-6">
          {college.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default CollegeDetailsPage;