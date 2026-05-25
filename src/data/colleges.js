import iit from "../assets/iit.jpg";
import nit from "../assets/nit.jpg";
import iiit from "../assets/iiit.jpg";

const colleges = [
  {
    id: 1,
    name: "IIT Hyderabad",
    location: "Hyderabad",
    fees: "₹2,00,000",
    rating: 4.8,
    placements: "92%",
    image: iit,
    courses: ["CSE", "ECE", "Mechanical"],
    overview:
      "Top engineering college with strong placements and research.",
  },

  {
    id: 2,
    name: "NIT Warangal",
    location: "Warangal",
    fees: "₹1,50,000",
    rating: 4.5,
    placements: "88%",
    image: nit,
    courses: ["CSE", "Civil", "EEE"],
    overview:
      "National Institute known for engineering excellence.",
  },

  {
    id: 3,
    name: "IIIT Hyderabad",
    location: "Hyderabad",
    fees: "₹3,00,000",
    rating: 4.9,
    placements: "95%",
    image: iiit,
    courses: ["CSE", "AI", "Data Science"],
    overview:
      "Premier institute focused on AI and computer science.",
  },
];

export default colleges;