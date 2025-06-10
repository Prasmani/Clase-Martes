import { useState } from "react";

const Lista = () => {
  const [items, setItems] = useState([]);
  const [texto, setTexto] = useState("");

  const agregarItem = () => {
    if (texto) {
      setItems([...items, texto]);
      setTexto("");
    }
  };

  const eliminarItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>📝 Lista</h2>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe algo..." />
      <button onClick={agregarItem}>Agregar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => eliminarItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
