import "../styles/CompetencesPage.css";
import JSS from "../assets/JS.jpg";
import CSSS from "../assets/css.svg";
import Github from "../assets/github.png";
import html from "../assets/html.png";
import node from "../assets/nodeJS.png";
import ReactJS from "../assets/react.png";
import reponsive from "../assets/responsiveWeb.png";

const CompetencesPage = () => {
  return (
    <div className="container">
      <div className="competencesBloc">
        <div className="competencesTitle">
          <h2>Mes compétences</h2>
        </div>

        <div className="competencesPageBloc">
          <div className="competencesTechniques">
            <h3>Compétences techniques</h3>

            <div className="competencesLogoBloc">
              <div className="competencesLogoSquare">
                <img src={JSS} alt="logo" className="competencesLogo" />
                <p>JavaScript</p>
              </div>

              <div className="competencesLogoSquare">
                <img src={CSSS} alt="logo" className="competencesLogo" />
                <p>CSS</p>
              </div>

              <div className="competencesLogoSquare">
                <img src={html} alt="logo" className="competencesLogo" />
                <p>html</p>
              </div>

              <div className="competencesLogoSquare">
                <img src={node} alt="logo" className="competencesLogo" />
                <p>Node JS</p>
              </div>

              <div className="competencesLogoSquare">
                <img src={ReactJS} alt="logo" className="competencesLogo" />
                <p>React JS</p>
              </div>

              <div className="competencesLogoSquare">
                <img src={Github} alt="logo" className="competencesLogo" />
                <p>Github</p>
              </div>

              <div className="competencesLogoSquare">
                <img src={ReactJS} alt="logo" className="competencesLogo" />
                <p>React Native</p>
              </div>

              <div className="competencesLogoSquare">
                <img src={reponsive} alt="logo" className="competencesLogo" />
                <p>Responsive Web</p>
              </div>
            </div>
          </div>

          <div className="competences">
            <div>
              <h3>Savoir-être</h3>
              <div className="competencesList">
                <li>autonome</li>
                <li>créative</li>
                <li>travail d'équipe</li>
                <li>capacité d'adaptation</li>
              </div>
            </div>

            <div>
              <h3>Langues</h3>
              <div className="competencesList">
                <li>anglais (débutant : en apprentissage)</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencesPage;
