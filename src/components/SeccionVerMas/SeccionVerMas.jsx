import { useState } from "react";
import Producto from "../Producto/Producto";



export default function SeccionVerMas({ productos }) {

     
    const productosAleatorios = productos.sort(() => Math.random() - 0.5);

    const [proxItems, setProxItems] = useState(0);

    function handleMostrarMas() {
        
        setProxItems(proxItems + 3)
    }

    return (
        <div>
            <div className="product-main">

                {
                    productosAleatorios.length > 0 &&
                    productosAleatorios.map((obj, indice) => {
                        if (indice < proxItems) {
                            return (
                                <Producto key={obj.id} producto={obj} />
                            )
                        }

                    })
                }


            </div>

            <div className="ver-mas-seccion">
                <button className="boton-ver-mas" onClick={handleMostrarMas}>Ver Más</button>


            </div>
        </div>


    )



}


