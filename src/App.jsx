import Productos from './components/Productos';
import Header from './components/Header';
import 'boxicons';
import {Route, Routes} from "react-router-dom";
import Hero from './components/Hero';
import { DataProvider } from './components/DataProvider';
import { Carrito } from './components/Carrito';
import ProductoDetalle from './components/ProductoDetalle';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Checkout from './components/pages/Checkout';
import SignIn from './components/SingIn';


function App() {
  return (
    <DataProvider>
    <div className="App">
      
      <Header/>
      <Carrito></Carrito>
      <SignIn />
      <Routes>
        <Route path="ecommerce/" element={<Hero/>}></Route>
          <Route  path="ecommerce/productos" element={<Productos />}></Route>
          <Route  path="ecommerce/producto/:id" element={<ProductoDetalle />}> </Route>
          <Route  path="ecommerce/checkout" element={<Checkout />}></Route>
          <Route  path="ecommerce/signup" element={<SignUp />}></Route>
          
        </Routes>
        <Footer></Footer>
    </div>
    </DataProvider>
  );
}

export default App;
