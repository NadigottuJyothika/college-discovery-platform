import { useState } from "react";
import CollegeCard from "../components/CollegeCard";
import colleges from "../data/colleges";

function HomePage() {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        College Discovery Platform
      </h1>

      <input
        type="text"
        placeholder="Search colleges..."
        className="border p-3 rounded-lg w-full mb-8"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
          />
        ))}
      </div>

    </div>
  );
}

export default HomePage;