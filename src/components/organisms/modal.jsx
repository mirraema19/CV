import { MdOutlineContentCopy } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";
import "../../css/styles.css";

function Modal({ modalVisible, cerrarModal, copiarUsuario, txtIdioma }) {
  const { titulo, parrafo1, parrafo2, boton} = txtIdioma.modal;
  return (
    <div className={modalVisible ? "modal modal--show" : "modal"}>
      <div className="modal-container">
        <div className="modal-content">
          <h2 className="modal-titulo">{titulo}</h2>
          <p>{parrafo1}</p>
          <p> {parrafo2}</p>
          <div className="modal-social-container">
            <div className="modal-social">
              <RxDiscordLogo />
              <a
                className="social-links"
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Discord: emanuel0145"}
              </a>
              <MdOutlineContentCopy
                className="modal-copyicon"
                onClick={() => copiarUsuario("emanuel0145")}
              />
            </div>
            <div className="modal-social">
              <BsInstagram />
              <a
                className="social-links"
                href="https://www.instagram.com/emanuel_mtz.04/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram: emanuel_mtz.04
              </a>
              <MdOutlineContentCopy
                className="modal-copyicon"
                onClick={() => copiarUsuario("emanuel_mtz.04")}
              />
            </div>
          </div>
          <button className="boton-cerrar" onClick={cerrarModal}>
            {boton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
