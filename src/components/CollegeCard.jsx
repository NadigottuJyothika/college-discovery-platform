export default function CollegeCard({ name, location }) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        padding: "16px",
        borderRadius: "12px",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <h3 style={{ marginBottom: "6px" }}>{name}</h3>
      <p style={{ margin: 0, color: "gray" }}>{location}</p>
    </div>
  );
}