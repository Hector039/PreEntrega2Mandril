import { NavLink, useParams } from "react-router-dom";

export default function ItemDetailContainer({ item }) {
    const productoId = useParams();

    let parametroId = productoId.productoId;

    const productoDetalle = item.find(obj => obj.id === parseInt(parametroId));

    return (
            <div className="product-card-detalle">
                <div>
                    <img src={productoDetalle.img_producto} alt={productoDetalle.nombre_producto} className="img-product-detalle" />
                </div>
                <div className="product-main-detalle">
                    <p>{productoDetalle.nombre_producto}</p>
                    <p>Stock: {productoDetalle.stock} -- ID: {productoDetalle.id}</p>
                    <p>Precio: ${productoDetalle.precio}</p>
                    <p>Descripción: {productoDetalle.descripcion}</p>

                <div className="buttons-card-detalle">
                    <NavLink to={"/carrito"} className="cart-button-detalle">Añadir al Carrito</NavLink>
                    <NavLink to={"/"} className="boton-ver-mas">Volver al listado</NavLink>
                </div>
                </div>
                
            </div>

    )
}