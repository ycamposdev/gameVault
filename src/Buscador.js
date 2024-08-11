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
