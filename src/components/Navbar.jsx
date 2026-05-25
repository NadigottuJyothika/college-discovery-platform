export default function Navbar() {
  return (
    <nav
      style={{
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      <h2 style={{ margin: 0 }}>College Discovery</h2>

      <div style={{ display: "flex", gap: "16px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Colleges
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}