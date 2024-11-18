import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const DatosElemento = ({ nombre, propiedad }) => {
  const [empty, setEmpty] = useState(
    propiedad === undefined || propiedad === null || propiedad === ""
      ? true
      : false
  );
  return (
    <div
      className={
        empty == true
          ? "d-none"
          : "col-12 w-100 agrandar bg-dark border border-2 rounded-pill mt-2 texto"
      }
    >
      <p className="pt-3">
        {nombre} <FaArrowAltCircleRight className="mx-3 luz" />
        {propiedad === "unknown" ? "¿?" : propiedad}
      </p>
    </div>
  );
};
export default DatosElemento;
