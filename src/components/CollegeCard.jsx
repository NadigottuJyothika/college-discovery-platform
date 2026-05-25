export default function CollegeCard({ college, onSelect, onCompare }) {
  const getImage = (name) => {
    switch (name) {
      case "IIT Delhi":
        return "/iit.jpg";
      case "IIT Bombay":
        return "/iiit.jpg";
      case "NIT Warangal":
        return "/nit.jpg";
      case "BITS Pilani":
        return "/bits.jpg";
      default:
        return "/iit.jpg";
    }
  };

  return (
    <div
      onClick={() => onSelect(college)}
      style={{
        border: "1px solid #ddd",
        padding: "14px",
        borderRadius: "10px",
        background: "white",
        cursor: "pointer",
      }}
    >
      <img
        src={getImage(college.name)}
        alt="college"
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3>{college.name}</h3>
      <p>📍 {college.location}</p>
      <p>💰 ₹{college.fees}</p>
      <p>⭐ {college.rating}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onCompare(college);
        }}
        style={{ marginTop: "8px" }}
      >
        Compare
      </button>
    </div>
  );
}