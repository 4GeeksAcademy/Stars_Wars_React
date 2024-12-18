import React from "react";
import Carta from "../Carta.jsx";
import { useParams } from "react-router";
import DatosElemento from "./DatosElemento.jsx";
import PlanetaCarta from "./PlanetaCarta.jsx";

const Character = ({ objeto }) => {
  console.log(objeto);
  const { categoria, id } = useParams();

  return (
    <div className="container my-3  texto">
      <div className="row mx-0 p-0 h-50">
        <div className="col-lg-5 col-12 row mx-0 p-0">
          <div className="col-6">
            {" "}
            <Carta
              id={objeto.id}
              nombre={objeto.nombre}
              url={objeto.img === undefined ? objeto.url : objeto.img}
              categoria={"specie"}
              individual={true}
            />
          </div>
          <div className="col-6 align-content-center text-center h-50">
            <div className="col-6 align-content-center">
              <h2 className="luz">{categoria}</h2>
            </div>
          </div>
          <div className="col-lg-12 col-12 mx-0 border border-2 text-center scroll objeto-generales bg-black agrandar rounded-3 mx-md-2">
            <span className="fs-3 luz mx-2">General Data</span>
            <DatosElemento nombre="Mass" propiedad={objeto.mass} />
            <DatosElemento nombre="Gender" propiedad={objeto.genero} />
          </div>
        </div>

        <div className="col-lg-3 col-12 col-md-6 row ">
          <div className="col-2 col-md-0"></div>
          <div className="col-9 col-md-12 my-3 my-lg-0">
            <PlanetaCarta
              id={objeto.id_planeta}
              nombre={objeto.nombre_planeta}
              img={objeto.img_planeta}
            />
          </div>
          <div className=" mt-3 ocultar">
            <div className="col-12 text-center py-1">
              <h3 className=" luz">Description</h3>
            </div>
            <div className="col-12 py-1 text-center">
              <p className=" px-3">{objeto.descripcion}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 col-md-6 my-md-3 my-3 my-md-0 text-center border border-2 bg-white rounded-3 text-dark scroll contenedor_pelicula agrandar">
          <span className="fs-3 mx-2">Aspect</span>
          <DatosElemento nombre="Name" propiedad={objeto.nombre} />
          <DatosElemento nombre="Heigth" propiedad={objeto.altura + " cm"} />
          <DatosElemento nombre="Skin Color" propiedad={objeto.color_skin} />
          <DatosElemento nombre="Hair Color" propiedad={objeto.color_pelo} />
          <DatosElemento nombre="Eye color" propiedad={objeto.color_ojos} />
        </div>
      </div>
    </div>
  );
};

export default Character;
