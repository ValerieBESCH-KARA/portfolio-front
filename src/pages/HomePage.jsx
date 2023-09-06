import picture from "../assets/codage.jpeg";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className=" pictureHomeBloc">
        <img alt="picture" src={picture} className="pictureHome" />

        <div className="container">
          <div className="textHome">
            <p>Valérie BESCH-KARA</p>
            <p>Développeur Web full-stack junior</p>
            <p>
              Création de site internet, site vitrine, site e-commerce,
              application mobile et sur-mesure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
