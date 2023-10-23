import "../styles/FormationsPage.css";

const FormationsPage = () => {
  return (
    <div className="container">
      <div className="formationsPageBloc">
        <div>
          <h2>Mon parcours</h2>
        </div>

        <section className="formationsBloc">
          <div>
            <p>septembre 2023</p>
            <div>
              <h5>Formation Type Script et Next</h5>
              <p>Le Réacteur</p>
              <p>
                Apprentissage et suivi de cours en ligne proposés par Le
                Reacteur.
              </p>
            </div>
          </div>

          <div>
            <p>mars 2023 - septembre 2023</p>
            <div>
              <h5>Formation développement et intégration web</h5>
              <p>Le Réacteur</p>
              <p>
                Apprentissage et suivi des cours en ligne proposés par Le
                Reacteur.
              </p>
            </div>
          </div>

          <div>
            <div>
              <p>Août 2013 - Décembre 2020</p>
            </div>
            <div>
              <h5>Lyon, Osétopathe à mon compte</h5>
              <p>Prise en charge de patients, gestion d'une société.</p>
            </div>
          </div>

          <div>
            <div>
              <p>Septembre 2007 - Juin 2013</p>
            </div>
            <div>
              <h5>Diplôme d'Ostéopathe D.O.T.O</h5>
              <p>Lyon, Isosteo Lyon (2007 - 2013)</p>
              <p>
                Apprentissage et suivi de cours dnas les locaux, en clinique
                d'ostéopathie et en divers stages durant la formation.
              </p>
            </div>
          </div>

          <div>
            <div>
              <p>Septembre 2005 - Juin 2007</p>
            </div>
            <div>
              <h5>1ère année de médecine</h5>
              <p>Lyon, Faculté de médecine Lyon Nord</p>
            </div>
          </div>

          <div>
            <div>
              <p>Juin 2005</p>
            </div>
            <div>
              <h5>BAC S</h5>
              <p>Lyon, Lycée du Parc</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormationsPage;
