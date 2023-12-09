import ContactForm from "../components/ContactForm";
import "../styles/ContactPage.css";

import Github from "../assets/github.png";
import Linkedin from "../assets/Linkedin.png";

const ContactPage = () => {
  return (
    <div className="container contactPage">
      <h3>Contactez-moi</h3>

      <ContactForm />

      <h4>N'hésitez pas à me suivre sur :</h4>
      <div className="contactLogoBloc">
        <a href="https://github.com/ValerieBESCH-KARA">
          <img src={Github} alt="logo" className="contactLogo" />
        </a>

        <a href="https://www.linkedin.com/in/valerie-besch-7b6755286/">
          <img src={Linkedin} alt="logo" className="contactLogo" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
