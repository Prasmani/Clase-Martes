import "./App.css";
import Interruptor from "./components/Interruptor";
import Contador from "./components/Contador";
import Lista from "./components/TextoInteractivo";
import Tema from "./components/Tema";

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "20px" }}>
      <Interruptor />
      <Contador />
      <Lista />
      <Tema />
    </div>
  );
}

export default App;
