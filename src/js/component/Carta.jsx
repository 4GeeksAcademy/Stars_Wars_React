import React, { useContext, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Context } from "../store/appContext";

const Carta = ({ id, nombre, url }) => {
  const { store, actions } = useContext(Context);
  const [Favorito, setFavorito] = useState(false);
  return (
    <div
      className="col-xxl-2 mx-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 mb-2 h-auto carta"
      onClick={() => {
        setFavorito(Favorito === false ? true : false);
        Favorito === true
          ? actions.QuitarFavoritos(nombre)
          : actions.AgregarFavoritos({ uid: id, nombre: nombre, img: url });
      }}
    >
      <div
        class="card p-0 m-0 border-3 borde-carta border-white  fondo m-2 "
        style={{ width: "11rem" }}
      >
        <div className="text-warning ">
          {Favorito === false ? (
            <CiStar className="m-0 icono_favoritos luz" />
          ) : (
            <FaStar className="m-0 icono_favoritos luz" />
          )}
        </div>
        <img
          src={url}
          class="card-img-top border-bottom borde-carta border-white"
          alt=""
        />
        <div class="text-center text-white">
          <p class="card-title py-2 fw-bold">
            {nombre === "unknown" ? " ¿?" : nombre}
          </p>
          <div className="row pt-3">
            <div className="col-8">
              <button className="fw-bold text-white btn btn-outline-dark w-100 rounded-0 border-3 border-bottom-0 border-start-0 borde-carta border-white">
                See More
              </button>
            </div>

            <div className="col-4 text-end align-content-end">
              <span className=" pt-1 px-2 bg-carta rounded-0 border-white border border-2 border-end-0 border-bottom-0 borde-carta luz fw-bold text-white ">
                {id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carta;
