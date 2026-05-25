import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import CollegeDetailsPage from "./pages/CollegeDetailsPage";
import ComparePage from "./pages/ComparePage";
import SavedPage from "./pages/SavedPage";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/college-details"
          element={<CollegeDetailsPage />}
        />

        <Route
          path="/compare"
          element={<ComparePage />}
        />

        <Route
          path="/saved"
          element={<SavedPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;