import { useState, useEffect } from "react";
import Header from "./components/organisms/header";
import Inicio from "./pages/inicio";
import AboutMe from "./pages/aboutme";
import Proyectos from "./pages/proyectos";
import Footer from "./components/organisms/footer";
import idiomas from "./idiomas";
import "./App.css";

function App() {
  const [idioma, setIdioma] = useState(() => {
    const idiomaGuardado = localStorage.getItem("Idioma");
    return idiomaGuardado || "es";
  });
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("ModoOscuro") === "true" ? true : false
  );
  const txtIdioma = idiomas[idioma];

  const bodyOverflowHidden = () => {
    document.body.classList.toggle("overflow--hiden");
  };

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    localStorage.setItem("Idioma", nuevoIdioma);
  };

  const cambiarModo = () => {
    const modo = !darkMode;
    setDarkMode(modo);
    localStorage.setItem("ModoOscuro", modo);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <main className="App">
      <Header
        cambiarModo={cambiarModo}
        darkMode={darkMode}
        cambiarIdioma={cambiarIdioma}
        txtIdioma={txtIdioma}
        bodyOverflowHidden={bodyOverflowHidden}
      />
      <Inicio txtIdioma={txtIdioma} />
      <AboutMe txtIdioma={txtIdioma} />
      <Proyectos txtIdioma={txtIdioma} />
      <Footer txtIdioma={txtIdioma} />
    </main>
  );
}

export default App;
