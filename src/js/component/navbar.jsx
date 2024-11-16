import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-white py-3 border-bottom borde-luz border-2 border-white">
      <div className="row mx-0">
        <div className="col-8 align-content-center d-flex">
          <h2 className="text-start fw-bold mx-md-2 mx-1 mt-2">
            Stars Wars Web
          </h2>
          <Link to="/" className="text-decoration-none  text-dark fw-bold mt-1">
            home
          </Link>
        </div>
        <div className=" col-4 text-end">
          <img
            src="https://www.pngitem.com/pimgs/m/530-5304124_star-wars-blanco-png-transparent-png.png"
            alt=""
            className="img-fluid img"
          />
        </div>
      </div>
    </div>
  );
};
