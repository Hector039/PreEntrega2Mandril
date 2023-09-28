import "./App.css";
import { useEffect, useState } from "react";
import getProductos from "./components/Api/Api";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import MiCuenta from "./components/MiCuenta/assets/MiCuenta";
import Carrito from "./components/Carrito/Carrito";
import Contacto from "./components/Contacto/Contacto";


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
        <div>
            <NavBar/>
            <ItemListContainer key={productos.id} productos={productos}/>
            <Footer/>
            <MiCuenta/>
            <Carrito/>
            <Contacto/>
        </div>
    )
}

