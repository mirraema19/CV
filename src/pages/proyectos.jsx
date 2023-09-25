import ProjectCard from "../components/atoms/projectcard";
import ImgGestor from "../assets/gestion.webp";
import ImgPeliculas from "../assets/peliculas.webp";
import ImgComida from "../assets/comida.webp";
import "../css/styles.css";

function Proyectos({ txtIdioma }) {
  const {
    titulo,
    proyecto1: {
      titulo: tituloProyecto1,
      descripcion: descripcionProyecto1,
      alt: altProyecto1,
      title: titleProyecto1,
    },
    proyecto2: {
      titulo: tituloProyecto2,
      descripcion: descripcionProyecto2,
      alt: altProyecto2,
      title: titleProyecto2,
    },
    proyecto3: {
      titulo: tituloProyecto3,
      descripcion: descripcionProyecto3,
      alt: altProyecto3,
      title: titleProyecto3,
    },
  } = txtIdioma.proyectos;

  return (
    <section id="proyectos">
      <h2 className="section-titulo">{titulo}</h2>
      <div className="cards">
        <ProjectCard
          name={tituloProyecto1}
          description={descripcionProyecto1}
          img={ImgPeliculas}
          alt={altProyecto1}
          title={titleProyecto1}
          webLink="https://github.com/moraema/movies"
          languages={["HTML", "CSS", "JS" ]}
        />
        <ProjectCard
          name={tituloProyecto2}
          description={descripcionProyecto2}
          img={ImgComida}
          alt={altProyecto2}
          title={titleProyecto2}
          languages={["REACT", "CSS", "JS"]}
        />
        <ProjectCard
          name={tituloProyecto3}
          description={descripcionProyecto3}
          img={ImgGestor}
          alt={altProyecto3}
          title={titleProyecto3}
          webLink="https://github.com/mirraema19/Inventario"
          languages={["HTML", "CSS", "JS", "REACT"]}
        />
      </div>
    </section>
  );
}

export default Proyectos;
