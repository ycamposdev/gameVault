/*import { useState } from "react";
import { useEffect } from "react";

function Buscador() {
  const [videojuegos, setVideojuegos] = useState([]);

  useEffect(() => {
    async function fetchData(tituloJuego) {
      const response = await fetch(
        `https://api-videogames-kkud.onrender.com/videojuegos/listarPorTitulo?titulo=${tituloJuego}`
      );
      const data = await response.json();
      setVideojuegos(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto w-full sm:w-1/5 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <label class="relative flex gap-2 ">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2 flex-none w-14">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            ...
          </svg>
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
          placeholder="Buscar videojuego..."
          type="text"
          name="search"
        />

        <button
          className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            {
              videojuegos.map((props) => {
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
              });
            }
          }}
        >
          Buscar
        </button>
      </label>
    </div>
  );
}
export default Buscador;*/
/*import { useState, useEffect } from "react";

function Buscador() {
  const [videojuegos, setVideojuegos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el texto del input

  // Función para buscar videojuegos por título
  const fetchData = async (tituloJuego) => {
    const response = await fetch(
      `https://api-videogames-kkud.onrender.com/videojuegos/listarPorTitulo?titulo=${tituloJuego}`
    );
    const data = await response.json();
    setVideojuegos(data);
  };

  // Manejar el clic en el botón de búsqueda
  const handleSearch = () => {
    fetchData(searchTerm);
  };

  return (
    <div className="container mx-auto w-full sm:w-1/5 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <label className="relative flex gap-2">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 flex-none w-14">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
           
         /* </svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Buscar videojuego..."
          type="text"
          name="search"
          value={searchTerm} // Vincular el valor del input con el estado
          onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el estado cuando el input cambia
        />
        <button
          className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSearch} // Ejecutar búsqueda al hacer clic
        >
          Buscar
        </button>
      </label>*/

/* <div className="mt-4">
        {videojuegos.map((props) => (
          <div
            key={props.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img
              src={props.imagen}
              style={{ width: "300px", height: "250px" }}
              onClick={() => alert("hiciste click en una imagen")}
            />
            <h2 className="text-lg text-gray-50"> {props.titulo}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buscador;*/
//Ya funciona
import React, { useState } from "react";

const Buscador = ({ onSearch }) => {
  const [searchKey, setSearchKey] = useState("");

  const handleInputChange = (event) => {
    setSearchKey(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchKey);
  };

  return (
    <div className="m-8   md:m-40">
      <h2 className="text-white  text-center text-3xl mb-8 ">
        Encuentra tu videojuego
      </h2>

      <div className="flex  max-w-md gap-y-4 gap-x-2 container mx-auto flex-none md:flex-3 sm:w-full">
        <input
          type="text"
          value={searchKey}
          onChange={handleInputChange}
          placeholder="Buscar por título"
          className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 bg-gray-800    flex-none  w-4/20 md:w-full sm:w-full"
        />
        <button
          onClick={handleSearch}
          style={{ color: "white" }}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full  md:w-1/6 sm:w-auto"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Buscador;
