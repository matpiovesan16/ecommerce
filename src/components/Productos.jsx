import React, { useContext, useState } from "react";
import { DataContext} from "./DataProvider";
import Producto from "./Producto";

export default function Productos() {

  const value = useContext(DataContext);
 




  return (
    <section className="productos__contenedor">
      <h1 className="titulo__producto">Productos</h1>
      <div className="productos">
        <Producto/>
      </div>
    </section>
  );
}
