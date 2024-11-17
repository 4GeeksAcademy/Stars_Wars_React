import React from "react";
import { useParams } from "react-router";
import DatosElemento from "./DatosElemento.jsx";
import Carta from "../Carta.jsx";
import ElementoTabla from "./ElementoTabla.jsx";
import PlanetaCarta from "./PlanetaCarta.jsx";

const Planeta = ({ objeto }) => {
  const { categoria, id } = useParams();

  return (
    <div className="container-fluid pt-3 texto">
      <div className="row">
        <div className="col-md-4 col-12 my-3 my-md-0">
          <PlanetaCarta
            id={id}
            nombre={objeto.name}
            img={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          />
        </div>
        <div className="col-md-8 col-12 contenedor_pelicula rounded-2 p-3 text-center scroll border borde-luz bg-white agrandar">
          <span className="fs-3 mx-2 fw-bold text-black py-3">Data</span>
          <DatosElemento nombre="Name" propiedad={objeto.name} />
          <DatosElemento nombre="Climate" propiedad={objeto.clima} />
          <DatosElemento nombre="Diameter" propiedad={objeto.diametro} />
          <DatosElemento nombre="Gravity" propiedad={objeto.gravedad} />
          <DatosElemento
            nombre="Orbital period"
            propiedad={objeto.periodo_orbital}
          />
          <DatosElemento nombre="Population" propiedad={objeto.popular} />
          <DatosElemento nombre="Rotation speed" propiedad={objeto.velocidad} />
          <DatosElemento
            nombre="Suface water"
            propiedad={objeto.water_surface}
          />
          <DatosElemento nombre="Terrain" propiedad={objeto.terreno} />
        </div>
      </div>
    </div>
  );
};

export default Planeta;
