import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import Carta from "./Carta.jsx";

const ContenedorVistaIndividual = () => {
  const { categoria, id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    const ejemplo = actions.ConseguirDatosInvidual(categoria, id);
    console.log(ejemplo);
  }, []);
  return (
    <div>
      {/* <Carta
        id={elem.uid}
        nombre={elem.name}
        url={elem.img === undefined ? elem.url : elem.img}
        categoria={elem.categoria}
      /> */}
    </div>
  );
};

export default ContenedorVistaIndividual;
