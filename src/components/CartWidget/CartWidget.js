import CarritoIcono from "./assets/carritoIcono.svg"

export default function CartWidget () {
return (
    <div className="cart-widget">
        <img src={CarritoIcono} alt="Icono Carrito"/>
        0
    </div>
)
}