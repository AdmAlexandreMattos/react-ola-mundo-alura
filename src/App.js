import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";

function App() {
  return window.location.pathname === "/" ? <Inicio /> : <SobreMim />;
}

export default App;
