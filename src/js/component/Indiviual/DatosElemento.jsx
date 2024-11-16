import React from "react";

const DatosElemento = ({ nombre, propiedad }) => {
  return (
    <div className="col-12 w-100 agrandar bg-dark border border-2 rounded-pill mt-2 texto">
      <p className="pt-3">
        {nombre} <span className="texto luz">{">"}</span> {propiedad}
      </p>
    </div>
  );
};
export default DatosElemento;
