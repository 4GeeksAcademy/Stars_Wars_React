import React from "react";

const VentanaCarga = () => {
  return (
    <div className="texto text-center align-content-center d-flex flex-column">
      <p className="text-loading">Loading </p>
      <div className="text-center">
        <div class="spinner-border icon-loading text-center" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class=" text-center mt-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrvu6h6L2LwplrkuQHKc2r8f0OvKz6clMrA&s"
            class="rounded-3 border border-2"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default VentanaCarga;
