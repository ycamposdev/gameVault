import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Buscador from "./Buscador";
//MODAL
import Modal from "./Modal";

function App() {
  const API_URL = "https://api-videogames-kkud.onrender.com/videojuegos";
  const [videojuegos, setVideojuegos] = useState([]);
  const [videojuego, setVideojuego] = useState({
    titulo: "Loading Videojuego",
  });
  //MODAL
  const [selectedVideojuego, setSelectedVideojuego] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchVideojuegos = async () => {
    try {
      const response = await axios.get(`${API_URL}/listar`);
      const results = response.data || [];
      console.log("Fetched results:", results);
      setVideojuegos(results);
      setVideojuego(results[0] || { titulo: "No Videojuego Found" });
    } catch (error) {
      console.error("Error fetching videojuegos:", error);
      setVideojuegos([]);
      setVideojuego({ titulo: "Error Loading Videojuego" });
    }
  };

  const searchVideojuegos = async (searchKey) => {
    try {
      const response = await axios.get(`${API_URL}/listarPorTitulo`, {
        params: { titulo: searchKey },
      });
      const results = response.data || [];
      console.log("Search results:", results);
      setVideojuegos(results);
      setVideojuego(results[0] || { titulo: "No Videojuego Found" });
    } catch (error) {
      console.error("Error searching videojuegos:", error);
      setVideojuegos([]);
      setVideojuego({ titulo: "Error Loading Videojuego" });
    }
  };

  //MODAL
  const handleVideojuegoClick = (videojuego) => {
    setSelectedVideojuego(videojuego);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideojuego(null);
  };
  //
  useEffect(() => {
    fetchVideojuegos();
  }, []);

  return (
    <div className="App  bg-slate-900 min-h-screen">
      <h1 className="text-white text-2xl font-semibold font-mono  container mx-auto py-5">
        Game Vault
      </h1>

      <Buscador onSearch={searchVideojuegos} />
      <div className=" container mx-auto px-2 max-w-5xl bg-slate-900 pt-16          ">
        <div className="grid grid-cols-2 gap-4 justify-items-center  sm:grid-cols-3  lg:grid-cols-4     ">
          {videojuegos.length > 0 ? (
            videojuegos.map((videojuego, index) => (
              <div
                key={index}
                className="col-md-4 mb-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:bg-indigo-500 duration-1000 rounded-lg cursor-pointer "
                onClick={() => handleVideojuegoClick(videojuego)}
              >
                <img
                  src={videojuego.imagen}
                  alt={videojuego.titulo}
                  className="rounded-md w-64 h-80    object-cover object-center "
                />
                <h4 className="text-center text-white text-xl font-light ">
                  {videojuego.titulo}
                </h4>
              </div>
            ))
          ) : (
            <p className="text-center text-white text-1xl">
              Videojuego no encontrado...
            </p>
          )}
        </div>
      </div>
      <Modal
        show={isModalOpen}
        onClose={closeModal}
        videojuego={selectedVideojuego}
      />
    </div>
  );
}

export default App;
