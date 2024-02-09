import React from "react";
import { Link } from "react-router-dom";
import ProductoDestacados from "./ProductosDestacados";

export default function Hero() {


  return (
    <div>
    <div className="hero">
        <h1 className="hero__titulo">Nuestras Principales Novedades</h1>
        <Link to={"/ecommerce/productos"} className="hero__btn">Ver Más</Link>
    </div>
    <ProductoDestacados></ProductoDestacados>
    </div>
  );
}
