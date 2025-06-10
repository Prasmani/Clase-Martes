import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>📊 Contador</h2>
      <h3>{contador}</h3>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Disminuir</button>
      <button onDoubleClick={() => setContador(0)}>Resetear (Doble clic)</button>
    </div>
  );
};

export default Contador;
