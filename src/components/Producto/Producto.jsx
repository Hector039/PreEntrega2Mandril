import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Producto({producto}) {
    const [cantidad, setCantidad] = useState(1);

    function handleRestar() {
        cantidad > 1 && setCantidad(cantidad - 1);
    }
    function handleSumar() {
        cantidad < producto.stock && setCantidad(cantidad + 1);
    }
    function handleAgregar() {
        console.log({...producto, cantidad});
    }
    
    return (
        <div className="product-card">
            
            <img src={producto.img_producto} alt={producto.nombre_producto} className="img-product" />
            <p>{producto.nombre_producto}</p>
            <p>Categoría: {producto.categoria}</p>
            <div className="precio-cantidad">
                <p>Precio: ${producto.precio}</p>
                <div className="seleccion-cantidad">
                    <button onClick={handleRestar} className="botton-cantidad">-</button>                
                    <p className="info-cantidad">{producto.stock === 0 ? "X" : cantidad}</p>
                    <button onClick={handleSumar} className="botton-cantidad">+</button>
                </div>
            </div>

            <div className="buttons-card">
                <NavLink to={`/${producto.id}`} className="info-button">Ver Detalle</NavLink>
                <button className="cart-button" onClick={handleAgregar}>Añadir al Carrito</button>
            </div>

        </div>
    )
}