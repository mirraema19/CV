import TextoDeColor from "./components/atoms/textodecolor";

const idiomas = {
  es: {
    header: {
      Inicio: "Inicio",
      SobreMi: "Sobre mí",
      Proyectos: "Proyectos",
      Contacto: "Contáctame",
    },
    inicio: {
      Subtitulo: "Estudiante Ingeneria en Software",
      Boton: "Descargar CV",
    },
    sobreMi: {
      titulo: "Sobre mí",
      parrafo1: (
        <p>
          ¡Hola! Soy <TextoDeColor text="Emanuel de Jesús" txtColor="red" />, un apasionado estudiante de ingeniería de software en la Universidad Politécnica de Chiapas. Desde que comencé mi carrera, he adquirido habilidades sólidas en una variedad de lenguajes de programación y tecnologías. Mi conjunto de habilidades incluye{" "}
          <TextoDeColor text="HTML" txtColor="#dd4b25" />,{" "}
          <TextoDeColor text="CSS" txtColor="#2277ff" />,{" "}
          <TextoDeColor text="JavaScript" txtColor="#e8b824" />,{" "}
          <TextoDeColor text="React" txtColor="#5ed3f3" />,{" "}
          <TextoDeColor text="C++" txtColor="#376e9d" /> y{" "}
          <TextoDeColor text="Java" txtColor="#5382a1" />. 💾
        </p>


      ),
      parrafo2: (
        <p>
          Actualmente, estoy cursando el cuarto cuatrimestre de mi programa académico y estoy 
          <TextoDeColor text=" emocionado" txtColor="blue" /> por el viaje que me espera en el mundo de la <TextoDeColor text="tecnología" txtColor="cadetblue" />. Mi enfoque principal es el desarrollo de <TextoDeColor text="software" txtColor="green" /> y el diseño de aplicaciones <TextoDeColor text="innovadoras" txtColor="purple" />. Disfruto especialmente trabajando en el desarrollo <TextoDeColor text="Front-End" txtColor="orange" />, donde puedo dar vida a diseños <TextoDeColor text="creativos" txtColor="red" /> y <TextoDeColor text="funcionales" txtColor="teal" /> para sitios web y aplicaciones.💻🎨
        </p>


      ),
      parrafo3: (
        <p>
          Mi objetivo es seguir desarrollando mis{" "}
          <TextoDeColor text="habilidades" txtColor="green" /> en el área de{" "}
          <TextoDeColor text="desarrollo" txtColor="#4100ff" /> Front-End. 💻
        </p>
      ),
    },
    proyectos: {
      titulo: "Proyectos Realizados",
      proyecto1: {
        titulo: "Sitio Web de Peliculas",
        descripcion:
          "Es un sitio web de peliculas, conectada a la Base de Datos, que fue realizada como practica.",
        alt: "Foto de la pelicula",
        title: "Imagen de la Pelicula",
      },
      proyecto2: {
        titulo: "Menú Inteligente",
        descripcion:
          "Será una pagina web con un Menú inteligentes para la toma de pedidos.",
        alt: "Foto Menú",
        title: "Imagen del Menú",
      },
      proyecto3: {
        titulo: "Gestor de Materiales",
        descripcion:
          "Es una pagina web, de Gestion de materiales de una constructora, donde tiene las funcionales del CRUD y asi mismo descargar un pdf de los registros.",
        alt: "Foto página web del gestor",
        title: "Imagen del gestor",
      },
    },
    modal: {
      titulo: "Contáctame",
      parrafo1:
        "Me encantaría poder hablar contigo. Si necesitas ponerte en contacto conmigo, puedes hacerlo a través de Discord o Instagram.",
      parrafo2: "Aquí te dejo mis detalles de contacto:",
      boton: "Cerrar",
    },
    otros: {
      copiado: "Texto copiado con éxito: ",
      copiadoerror: "No se ha podido copiar el texto, error: ",
      alertadesarrollo: "En Desarrollo",
    },
  },
};

export default idiomas;
