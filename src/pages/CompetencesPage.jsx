import "../styles/CompetencesPage.css";

import JSS from "../assets/JS.png";
import CSSS from "../assets/css.svg";
import Github from "../assets/github.png";
import html from "../assets/html.png";
import Node from "../assets/nodeJs.png";
import ReactJS from "../assets/react.png";
import reponsive from "../assets/responsiveWeb.png";

const CompetencesPage = () => {
  return (
    <div className="container">
      <div className="competencesBloc">
        <div className="competencesTitle">
          <h2>Mes compétences</h2>
        </div>

        <div className="competencesLogoBloc">
          <div>
            <img src={JSS} alt="logo" className="competencesLogo" />
            <p>JavaScript</p>
          </div>

          <div>
            <img src={CSSS} alt="logo" className="competencesLogo" />
            <p>CSS</p>
          </div>

          <div>
            <img src={html} alt="logo" className="competencesLogo" />
            <p>html</p>
          </div>

          <div>
            <img src={Node} alt="logo" className="competencesLogo" />
            <p>Node js</p>
          </div>

          <div>
            <img src={ReactJS} alt="logo" className="competencesLogo" />
            <p>React JS</p>
          </div>

          <div>
            <img src={Github} alt="logo" className="competencesLogo" />
            <p>Github</p>
          </div>

          <div>
            <img src={ReactJS} alt="logo" className="competencesLogo" />
            <p>React Native</p>
          </div>

          <div>
            <img src={reponsive} alt="logo" className="competencesLogo" />
            <p>Responsive Web</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencesPage;
