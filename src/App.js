import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import getProductos from "./components/Api/Api";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import MiCuenta from "./components/MiCuenta/assets/MiCuenta";
import Carrito from "./components/Carrito/Carrito";
import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


export default function App(){

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function axiosData() {
            let data = await getProductos();
            
            setProductos(data);
        }
        axiosData();

    }, [])

    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path={"/"} element={<ItemListContainer key={productos.id} productos={productos}/>} />     
            <Route exact path={"/:productoId"} element={<ItemDetailContainer key={productos.id} item={productos}/>}/>
            <Route exact path={"/cuenta"} element={<MiCuenta/>}/>
            <Route exact path={"/carrito"} element={<Carrito/>}/>            
            <Route exact path={"/contacto"} element={<Contacto/>}/>
        </Routes>   
        <Footer/>     
        </BrowserRouter>
    )
}

