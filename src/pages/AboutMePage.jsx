import "../styles/AboutMePage.css";
import Me from "../assets/Me.png";

const AboutMePage = () => {
  return (
    <div className="container aboutMeBloc">
      <div className="aboutMe">
        <h2>À propos de moi</h2>
      </div>

      <div className="infoMeBloc">
        <div className="infoMe">
          <p>
            Je m'appelle Valérie BESCH-KARA, j'ai travaillé près de 10 ans à mon
            compte en tant qu'ostéopathe sur Lyon avant de devoir m'arrêter
            suite au covid pour éléver mes 2 enfants.
          </p>
          <p>
            J'ai toujours eu un attrait pour l'informatique qui s'est emplifié
            lorsque j'ai débuté le codage par moi-même. J'ai suivi une formation
            de 6 mois avec l'école "Le Reacteur" afin de poser de vraies bases
            et d'acquérir de nouvelles compétences.
          </p>
          <p>
            Passionnée par le développement web, j'aime éxpérimenter, découvrir
            et apprendre de nouvelles technologies. Je me forme régulièrement
            sur d'autres languages
          </p>
          <p>
            Dans ce portfolio que j'ai réalisé, je vais vous présenter mes
            compétences, mon parcours ainsi que mes principales intégrations.
          </p>
          <p>Pour toute question, n'hésitez pas à me contacter.</p>
        </div>

        <div className="imgMe">
          <img src={Me} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
