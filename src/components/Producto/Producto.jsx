import { NavLink } from "react-router-dom";

export default function Producto({producto}) {
    
    return (
        <div className="product-card">
            <img src={producto.img_producto} alt={producto.nombre_producto} className="img-product" />
            <p>{producto.nombre_producto}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>

            <div className="buttons-card">
            <NavLink to={`/${producto.id}`} className="info-button">Ver Detalle</NavLink>
                <button className="cart-button">Añadir al Carrito</button>
            </div>

        </div>
    )
}