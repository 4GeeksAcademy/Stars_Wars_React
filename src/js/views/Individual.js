import React, { useContext, useEffect, useState } from "react";
import "../../styles/Individual.css";

import Character from "../component/Indiviual/Character.jsx";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";
import Film from "../component/Indiviual/Film.jsx";
import VentanaCarga from "../component/Indiviual/VentanaCarga.jsx";
import StarShip_Vehicle from "../component/Indiviual/StarShip&Vehicle.jsx";
import Planeta from "../component/Indiviual/Planeta.jsx";
import Specie from "../component/Indiviual/Specie.jsx";

export const Individual = () => {
  const { categoria, id } = useParams();
  const { store, actions } = useContext(Context);
  const [obj, setObj] = useState([]);
  const [cargado, setCargado] = useState(false);

  const Individual = () => {
    switch (categoria.toLowerCase()) {
      case "film":
        return <Film objeto={obj} />;
        break;
      case "character":
        return <Character objeto={obj} />;
        break;
      case "starship":
        return <StarShip_Vehicle objeto={obj} />;
        break;
      case "vehicle":
        return <StarShip_Vehicle objeto={obj} />;
        break;
      case "planet":
        return <Planeta objeto={obj} />;
        break;
      case "specie":
        return <Specie objeto={obj} />;
        break;

      default:
        break;
    }
  };

  const conseguirdatos = async () => {
    const Objeto = await actions.ConseguirDatosInvidual(categoria, id);
    setObj(Objeto);
    setCargado(true);
  };

  useEffect(() => {
    conseguirdatos();
  }, []);
  return (
    <>
      <div className="contenedor">
        {cargado === true ? Individual() : <VentanaCarga />}
      </div>
    </>
  );
};
