import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { DataContext } from './DataProvider';
import { useParams } from "react-router-dom";

export default function ProductoDetalle() {

    const value = useContext(DataContext);
    const [producto] = value.productos;
    const [product, setDetalle] = useState([]);
    const params = useParams();
    const valueCarrito = useContext(DataContext);
    const addCarrito = valueCarrito.addCarrito;


    const [menu, setMenu] = value.menu;

    const toggleMenu = ()=>{
        setMenu(!menu);
      }
    


    useEffect(()=>{
        producto.forEach(product=>{
            if(product.id===parseInt(params.id)){
                setDetalle(product);

            }
        })
    }, [params.id, producto]);

    console.log(product);






    const ShowProduct = () => {
        return (
          <>
            <div className="producto__detalle__imagen">
              <img
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>

            <div className="producto__detalle__textos">
              <h4 className="producto__detalle__textos__categoria">{product.category}</h4>
              <h1 className="producto__detalle__textos__titulo">{product.title}</h1>
              <p className="producto__detalle__textos__rating">
                Rating {product.rating && product.rating.rate} 
                <box-icon name="star" type="solid"></box-icon>
              </p>
              <h3 className="producto__detalle__textos__precio">$ {product.price}</h3>
                <p className="producto__detalle__textos__descripcion">
                    {product.description}
                </p>
                <div className='producto__detalle__textos__btn'>
                <button className="btn" onClick={()=>addCarrito(product.id)}>Agregar al carrito</button>
                <button className="btn" onClick={toggleMenu}>
                    Ir al carrito
                </button>

                </div>
              
            </div>
    
          </>
        );
      }




  return (
    <>
    <div className='producto__detalle'>
    <div className='producto__detalle__container'>
        <ShowProduct/>
          
    </div>
    </div>
    </>
  )
}
