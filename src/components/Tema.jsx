import { useState } from "react";

const Tema = () => {
  const [modoClaro, setModoClaro] = useState(true);

  const cambiarTema = () => {
    document.body.style.backgroundColor = modoClaro ? "#222" : "#FFF";
    document.body.style.color = modoClaro ? "#FFF" : "#000";
    setModoClaro(!modoClaro);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>{modoClaro ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}</h2>
      <button onClick={cambiarTema}>Cambiar Tema</button>
    </div>
  );
};

export default Tema;
