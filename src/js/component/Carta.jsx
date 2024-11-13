import React, { useState } from "react";

const Carta = (props) => {
  const [carta, SetCarta] = useState(
    props.genero === undefined || null || props.height === undefined || null
      ? false
      : true
  );
  return (
    <div className="col-xxl-2 mx-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 mb-2 ">
      <div
        class="card p-0 m-0 border-3 border-luz border-white  fondo m-2 "
        style={{ width: "11rem" }}
      >
        <img
          src={props.url}
          class="card-img-top border-bottom border-luz border-white"
          alt="..."
        />
        <div class="text-center text-white">
          <p class="card-title py-2 fw-bold">
            {props.nombre === "unknown" ? " ¿?" : props.nombre}
          </p>
          <div className={carta === true ? "" : "d-none"}>
            <p className="my-1">
              Gender{"  "}
              <span className="luz fw-bold">
                {props.genero === "unknown" ? " ¿?" : props.genero}
              </span>
            </p>
            <p className="my-1">
              Heigth{"  "}
              <span className="luz fw-bold">
                {props.altura === "unknown" ? " ¿?" : props.altura + " CM"}
              </span>
            </p>
          </div>
          <div className="row pt-3">
            <div className="col-8">
              <button className="fw-bold text-white btn btn-outline-dark w-100 rounded-0 border-3 border-bottom-0 border-start-0 border-luz border-white">
                See More
              </button>
            </div>

            <div className="col-4 text-end align-content-end">
              <span className=" pt-1 px-2 bg-black rounded-start luz fw-bold text-white ">
                {props.id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carta;
