import { useState } from "react";

const TextoInteractivo = () => {
  const [texto, setTexto] = useState("");

  // Función para manejar cambios en el input
  const handleInputChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f0f8ff" }}>
      <h2 style={{ color: "#0073e6" }}>📝 Escribe algo:</h2>
      <input 
        type="text" 
        value={texto} 
        onChange={handleInputChange} 
        placeholder="Empieza a escribir..." 
        style={{ padding: "8px", marginBottom: "10px", border: "1px solid #0073e6", borderRadius: "4px" }}
      />
      <h3 style={{ color: texto ? "#008000" : "#ff0000" }}>{texto || "Aún no has escrito nada..."}</h3>
    </div>
  );
};

export default TextoInteractivo;
