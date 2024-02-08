import React from 'react'
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { DataContext } from './DataProvider';
import { Link } from 'react-router-dom';

export default function Producto() {

    const value = useContext(DataContext);
    const valueCarrito = useContext(DataContext);
    const addCarrito = valueCarrito.addCarrito;

    const [productos] = value.productos;
  

  
  let cargaProductos = productos.map((produc) =>{
    return(
      <div className="producto" key={produc.id}>
            <Link to={`/producto/${produc.id}`} className="img__producto">
              <img src={produc.image} alt={produc.title} />
            </Link>
            <div className="producto__footer">
              <h1>{produc.title.substring(0,12)}...</h1>
              <p>{produc.category}</p>
              <p className="precio">${produc.price}</p>
            </div>
            <div className="button">
              <button className="btn" onClick={()=>addCarrito(produc.id)}>ADD</button>
  
                <Link to={`/producto/${produc.id}`}>VER</Link>
              
            </div>
          </div>
  
    )
    
    
  })
      
    
    
    return (
    <>
    {cargaProductos}
    </>
  )
}
