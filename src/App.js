import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Porta from "./components/Porta";
import Tecnologias from "./components/Tecnologias";
import Contacto from "./components/Contacto";

function App() {
  return (
  <div>
    <NavBar/>
    <Home />
    <About/>
    <SocialLink />
    <Porta />
    <Tecnologias />
    <Contacto />
  </div>
  );
}

export default App;
