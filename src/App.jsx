import { useState } from "react";
import Navbar from "./components/Navbar";
import CollegeCard from "./components/CollegeCard";
import { colleges } from "./data/colleges";

export default function App() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [compareList, setCompareList] = useState([]);

  const locations = ["All", ...new Set(colleges.map((c) => c.location))];

  const filtered = colleges.filter((c) => {
    return (
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      (locationFilter === "All" || c.location === locationFilter)
    );
  });

  const toggleCompare = (college) => {
    const exists = compareList.find((c) => c.id === college.id);

    if (exists) {
      setCompareList(compareList.filter((c) => c.id !== college.id));
    } else if (compareList.length < 2) {
      setCompareList([...compareList, college]);
    }
  };

  return (
    <div>
      <Navbar />

      {/* SEARCH + FILTER */}
      <div style={{ padding: "15px", display: "flex", gap: "10px" }}>
        <input
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px" }}
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          style={{ padding: "8px" }}
        >
          {locations.map((l, i) => (
            <option key={i}>{l}</option>
          ))}
        </select>
      </div>

      {/* GRID */}
      {!selectedCollege && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px",
          padding: "15px"
        }}>
          {filtered.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              onSelect={setSelectedCollege}
              onCompare={toggleCompare}
            />
          ))}
        </div>
      )}

      {/* DETAIL VIEW */}
      {selectedCollege && (
        <div style={{ padding: "15px" }}>
          <button onClick={() => setSelectedCollege(null)}>
            Back
          </button>

          <h1>{selectedCollege.name}</h1>
          <p>📍 {selectedCollege.location}</p>
          <p>💰 ₹{selectedCollege.fees}</p>
          <p>⭐ {selectedCollege.rating}</p>
        </div>
      )}

      {/* COMPARE */}
      {compareList.length === 2 && (
        <div style={{ padding: "15px", borderTop: "1px solid #ddd" }}>
          <h2>Compare Colleges</h2>

          <div style={{ display: "flex", gap: "10px" }}>
            {compareList.map((c) => (
              <div key={c.id} style={{ border: "1px solid #ccc", padding: "10px", flex: 1 }}>
                <h3>{c.name}</h3>
                <p>📍 {c.location}</p>
                <p>💰 ₹{c.fees}</p>
                <p>⭐ {c.rating}</p>
              </div>
            ))}
          </div>

          <button onClick={() => setCompareList([])}>
            Clear Compare
          </button>
        </div>
      )}
    </div>
  );
}