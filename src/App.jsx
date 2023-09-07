import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import CompetencesPage from "./pages/CompetencesPage";
import FormationsPage from "./pages/FormationsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="fontFamily">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutMe" element={<AboutMePage />} />
          <Route path="/competences" element={<CompetencesPage />} />
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
