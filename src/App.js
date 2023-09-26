import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import MiCuenta from "./components/MiCuenta/assets/MiCuenta";
import Carrito from "./components/Carrito/Carrito";
import Contacto from "./components/Contacto/Contacto";

export default function App(){
    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting={"Bienvenidos a nuestro Mercadito Verde"}/>
            <Footer/>
            <MiCuenta/>
            <Carrito/>
            <Contacto/>
        </div>
    )
}

