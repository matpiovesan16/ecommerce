import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
import Producto from "./Producto";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const showCarritos = menu ? "carritos show" : "carritos";
  const showCarrito = menu ? "carrito show" : "carrito";

  const resta = (id) =>{
    carrito.forEach(item =>{
        if(item.id === id){
            item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -=1
        }
        setCarrito([...carrito])

    })

  }


  const suma = (id) =>{
    carrito.forEach(item =>{
        if(item.id === id){
            item.cantidad+=1;
        }
        setCarrito([...carrito])

    })

  }



  const togglefalse = () => {
    setMenu(false);
  };

  const removeProducto = (id) => {
    if (window.confirm("Quieres quitar el producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });

      setCarrito([...carrito]);
     
    }
  };

  const display = carrito.map((car) => {
    return (
      <div className="carrito__item" key={car.id}>
        <img src={car.image} alt="" />

        <div className="titulo__carrito">
          <h3>{car.title.substring(0,12)}...</h3>
         
        </div>


        <div className="precio__carrito">
        <p className="price">${(car.price * car.cantidad).toFixed(2)}</p>
        </div>

        <div className="contador__item">
          <box-icon name="plus-circle" onClick={()=> suma(car.id)}></box-icon>
          <p className="cantidad">{car.cantidad}</p>
          <box-icon name="minus-circle" onClick={()=> resta(car.id)}></box-icon>
        </div>


        <div className="remove__item" >
          <box-icon name="trash" onClick={() => removeProducto(car.id)}></box-icon>
        </div>
      </div>
    );
  });

  return (
    <div className={showCarritos}>
      <div className={showCarrito}>
        <div className="carrito__close" >
          <box-icon name="x" onClick={togglefalse}></box-icon>
        </div>
        <h2>Su carrito</h2>
        <div className="carrito__center">
            {
                carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize:"3rem"}}>Carrito vacio</h2> : display
            }
            </div>

        <div className="carrito__footer">
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="ecommerce/checkout" className="btn"  onClick={togglefalse}>Pagar</Link>
        </div>
      </div>
    </div>
  );
};
