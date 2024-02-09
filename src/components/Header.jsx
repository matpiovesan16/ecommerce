import React from "react";
import { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export default function Header() {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [session, setSession] = value.session;
  const [carrito] = value.carrito;

  const toggleMenu = ()=>{
    setMenu(!menu);
  }

  const toggleSession = ()=>{
    setSession(!session);
  }



  return (
    <div className="header__contenedor">
      <Link to="ecommerce/">
        <div className="logo">
          <h1>LFA Distribuciones</h1>
        </div>
      </Link>

      <div className="barSearch">
        <form action="">
          <input type="text" placeholder="Buscar Productos..." className="buscador"/>
          <button className="btn__search">
            <box-icon name="search" color="grey"></box-icon>
          </button>
        </form>
      </div>

      <div className="cart">
        <button onClick={toggleMenu}>
          <box-icon name="cart" color="white"></box-icon>
          <span className="itemTotal">{carrito.length}</span>
        </button>
      </div>
      <div className="inicio__session">
        <button onClick={toggleSession}><box-icon name='user' color='white' type='solid'></box-icon></button>
      </div>
    </div>
  );
}
