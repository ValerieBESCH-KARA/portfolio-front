import "../styles/Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container headerLinkBloc">
        <Link to="/" className="fontFamilyHeader">
          Valérie Besch-Kara
        </Link>

        <div className="headerLink">
          <Link to="/aboutMe">À propos de moi</Link>
          <Link to="/competences">Compétences</Link>
          <Link to="/formations">Formations</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
