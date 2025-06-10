import { useState } from "react";

const Tema = () => {
  const [esSabana, setEsSabana] = useState(true);

  const cambiarTema = () => {
    if (esSabana) {
      // Tema Bosque
      document.body.style.backgroundColor = "#2e5339"; // verde bosque
      document.body.style.color = "#e8f5e9"; // verde claro
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1528731708534-816fe59f90aa?fit=crop&w=1350&q=80')";
      document.body.style.backgroundSize = "cover";
    } else {
      // Tema Sabana
      document.body.style.backgroundColor = "#f4e2d8"; // color arena
      document.body.style.color = "#5c3b1e"; // marrón sabana
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1606567598185-0c847ddb9d3a?fit=crop&w=1350&q=80')";
      document.body.style.backgroundSize = "cover";
    }
    setEsSabana(!esSabana);
  };

  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      border: "2px solid #ccc",
      borderRadius: "10px",
      backgroundColor: esSabana ? "rgba(255, 248, 220, 0.8)" : "rgba(46, 83, 57, 0.8)",
      color: esSabana ? "#5c3b1e" : "#e8f5e9"
    }}>
      <h2>{esSabana ? "🌾 Tema Sabana" : "🌲 Tema Bosque"}</h2>
      <button onClick={cambiarTema}>
        Cambiar a {esSabana ? "Bosque" : "Sabana"}
      </button>
    </div>
  );
};

export default Tema;
