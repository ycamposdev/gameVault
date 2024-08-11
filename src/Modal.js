import React from "react";
import YouTube from "react-youtube";
const Modal = ({ show, onClose, videojuego }) => {
  if (!show) return null;
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center ">
      <div className=" rounded-lg overflow-hidden shadow-xl transform transition-all    bg-slate-900   ">
        <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="mt-2 ">
                <YouTube
                  videoId={new URLSearchParams(
                    new URL(videojuego.video).search
                  ).get("v")}
                  opts={opts}
                  className="w-full h-56 sm:h-auto md:h-96"
                />
                <h3 className="text-xl leading-6 font-medium text-gray-50 mt-5">
                  {videojuego.titulo}
                </h3>
                <p className="text-lg text-gray-500 mt-5">
                  {videojuego.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm "
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
