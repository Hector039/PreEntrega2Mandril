

export default function Producto({producto}) {
   
    return (
        <div className="product-card">
            <img src={producto.img_producto} alt={producto.nombre_producto} className="img-product" />
            <p>{producto.nombre_producto}</p>
            <p>Stock: {producto.stock} -- ID: {producto.id}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
            <div className="buttons-card">
                <button className="info-button">Ver Info</button>
                <button className="cart-button">Añadir al Carrito</button>
            </div>

        </div>
    )
}