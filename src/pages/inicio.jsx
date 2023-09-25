import React from "react";
import Logo from "../assets/yo.webp";
import "../css/styles.css";
import { BsPersonVcard } from "react-icons/bs";

function Inicio({ txtIdioma }) {
  const { Subtitulo, Boton } = txtIdioma.inicio;

  return (
    <section id="inicio">
      <div className="inicio-container">
        <div className="inicio-text">
          <h1 className="inicio-titulo">
            EMAjsx <span className="saludar">👋</span>
          </h1>
          <h2 className="inicio-subtitulo">{Subtitulo}</h2>
        </div>
        <a
          className="inicio-boton"
          href="/CV.pdf" 
          download="Mi_CV.pdf" 
        >
          {Boton}{" "}
          <span className="span-icono">
            <BsPersonVcard className="icono-curriculum" />
          </span>
        </a>
      </div>
      <figure>
        <img className="inicio-logo" src={Logo} alt="Foto" title="Logo" />
      </figure>
    </section>
  );
}

export default Inicio;
