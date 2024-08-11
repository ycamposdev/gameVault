import { useState } from "react";
import { useEffect } from "react";

export function Api() {
  const [videojuegos, setVideojuegos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api-videogames-kkud.onrender.com/videojuegos/listar"
      );
      const data = await response.json();
      setVideojuegos(data);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        width: "1200px",
        margin: "0 auto",
        gap: "50px",
      }}
    >
      {videojuegos.map((props) => {
        return (
          <div key={props.id}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={props.imagen}
                style={{ width: "300px", height: "250px" }}
                onClick={() => {
                  alert("hiciste click en una imagen");
                }}
              />
              <h2 className="text-lg text-gray-50"> {props.titulo}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
