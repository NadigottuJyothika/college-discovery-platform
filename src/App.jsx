import { useState } from "react";
import Navbar from "./components/Navbar";
import CollegeCard from "./components/CollegeCard";

export default function App() {
  const [search, setSearch] = useState("");

  const colleges = [
    { name: "IIT Delhi", location: "Delhi" },
    { name: "IIT Bombay", location: "Mumbai" },
    { name: "NIT Warangal", location: "Telangana" },
    { name: "BITS Pilani", location: "Rajasthan" },
  ];

  const filtered = colleges.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div style={{ padding: "16px" }}>
        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "300px",
            marginBottom: "16px",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          padding: "16px",
        }}
      >
        {filtered.map((college, index) => (
          <CollegeCard
            key={index}
            name={college.name}
            location={college.location}
          />
        ))}
      </div>
    </div>
  );
}