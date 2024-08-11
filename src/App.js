/*import logo from "./logo.svg";
import "./App.css";
import Titulo from "./Titulo";
import Buscador from "./Buscador";
import { Api } from "./Api";
import Paginator from "./Paginator";
//
import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";

function App() {
  const API_URL = "https://api-videogames-kkud.onrender.com/videojuegos/listar";

  const [videojuegos, setVideojuegos] = useState([]);
  const [searchKey, setSerachKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [videojuego, setVideojuego] = useState({ title: "Loading Videojuego" });
  const [playing, setPlaying] = useState(false);

  const fetchVideojuegos = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(API_URL);

    setVideojuegos(results);
    setVideojuego(results[0]);
  };

  useEffect(() => {
    fetchVideojuegos();
  }, []);

  return (
    <div className="App bg-blue-950 min-h-screen">
    
      <div className="container mt-3">
        <div className="row">
          {videojuegos.map((videojuego) => {
            return (
              <div key={videojuego.id} className="col-md-4 mb-3">
                <img src={videojuego.imagen} alt="" height={600} width="100%" />
                <h4 className="text-center">{videojuego.titulo}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;*/
//Esto ya funciona
/*import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API_URL = "https://api-videogames-kkud.onrender.com/videojuegos/listar";

  const [videojuegos, setVideojuegos] = useState([]);
  const [videojuego, setVideojuego] = useState({
    titulo: "Loading Videojuego",
  });

  const fetchVideojuegos = async () => {
    try {
      const response = await axios.get(API_URL);
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

  const searchVideojuego = (e) => {
    e.preventDefault();
    fetchVideojuegos();
  };

  useEffect(() => {
    fetchVideojuegos();
  }, []);

  return (
    <div className="App bg-blue-950 min-h-screen">
      <h2 className="text-center text-white">Trailer videojuegos</h2>
      <form>
        <input type="text" placeholder="seacrh" />
      </form>

      <div className="">
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            width: "1200px",
            margin: "0 auto",
            gap: "50px",
          }}
        >
          {videojuegos.length > 0 ? (
            videojuegos.map((videojuego, index) => (
              <div key={videojuego.id} className="row">
                <img
                  src={videojuego.imagen}
                  alt={videojuego.titulo}
                  height={200}
                  width="20%"
                  style={{ width: "300px", height: "250px" }}
                />
                <h4 className="text-center text-white">{videojuego.titulo}</h4>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No videojuegos found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;*/
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
