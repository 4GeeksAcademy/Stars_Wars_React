import React, { useContext, useEffect, useState } from "react";
import "../../styles/Individual.css";

import Character from "../component/Indiviual/Character.jsx";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";
import Film from "../component/Indiviual/Film.jsx";
import VentanaCarga from "../component/Indiviual/VentanaCarga.jsx";

export const Individual = () => {
  const { categoria, id } = useParams();
  const { store, actions } = useContext(Context);
  const [obj, setObj] = useState([]);
  const [cargado, setCargado] = useState(false);

  const conseguirdatos = async () => {
    const Objeto = await actions.ConseguirDatosInvidual(categoria, id);
    setObj(Objeto);
    setCargado(true);
  };

  useEffect(() => {
    conseguirdatos();

    console.log(obj);
  }, []);
  return (
    <>
      <div className="contenedor">
        {cargado === true ? <Film objeto={obj} /> : <VentanaCarga />}
      </div>
    </>
  );
};
