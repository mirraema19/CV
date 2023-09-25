import { FaGithub, FaInstagram, FaDiscord, FaTwitch } from "react-icons/fa";
import FooterButton from "../molecules/footerbutton";
import "../../css/styles.css";

function Footer() {
  return (
    <footer>
      <p className="footer-titulo">EMAjsx 2004</p>
      <div className="footer-buttons">
      <FooterButton
          link={"https://github.com/settings/profile"}
          titulo="Github"
          icono={FaGithub}
        />
        <FooterButton
          link={"https://www.instagram.com/emanuel_mtz.04/"}
          titulo="Instagram"
          icono={FaInstagram}
        />
        <FooterButton
          link={"https://discord.com/channels/@me"}
          titulo="Discord"
          icono={FaDiscord}
        />
        
      </div>
    </footer>
  );
}

export default Footer;
