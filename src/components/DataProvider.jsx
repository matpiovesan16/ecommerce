import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] =useState(false);
    const [session, setSession] = useState(false);
    const [carrito, setCarrito]= useState([]);
    const [total, setTotal] = useState(0);

    let api = 'https://fakestoreapi.com/products';


    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch(api);
            const data = await res.json();

            setProductos(data);
        };

        fetchData();

    },[api]);


    const addCarrito = (id)=>{
        const check = carrito.every(item=>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto ya se agrego");
        }
    }

    useEffect(()=>{
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))

        if(dataCarrito){
            setCarrito(dataCarrito)

        }

    },[])

    useEffect(()=>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito));
    },[carrito])

    useEffect(()=>{
        const getTotal = () =>{
            const res = carrito.reduce((prev, item)=>{return prev + (item.price * item.cantidad);
            },0)

            setTotal(res);
        }

        getTotal();

    },[carrito])


    for(let i=0; i<productos.length; i++){
        if(!productos[i].cantidad){
            productos[i].cantidad = 1;
        }
    
      }



   
      const value= {
        productos : [productos],
        menu: [menu, setMenu],
        session: [session, setSession],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total,setTotal]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )


}