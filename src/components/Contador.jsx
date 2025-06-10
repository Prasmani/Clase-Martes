import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f0f8ff" }}>
      <h2 style={{ color: "#0073e6" }}>📊 Contador</h2>
      <h3 style={{ color: contador >= 0 ? "#008000" : "#ff0000" }}>{contador}</h3>
      <button
        style={{ margin: "5px", padding: "10px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        onClick={() => setContador(contador + 1)}
      >
        Incrementar
      </button>
      <button
        style={{ margin: "5px", padding: "10px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        onClick={() => setContador(contador - 1)}
      >
        Disminuir
      </button>
      <button
        style={{ margin: "5px", padding: "10px", backgroundColor: "#ffa500", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        onDoubleClick={() => setContador(0)}
      >
        Resetear (Doble clic)
      </button>
    </div>
  );
};

export default Contador;
