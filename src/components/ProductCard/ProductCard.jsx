import Producto from "../Producto/Producto";
import { useState } from "react";

export default function ProductCard({ producto }) {

    
    const [proxItems, setProxItems] = useState(3);

   
    function handleMostrarMas() {
        setProxItems(proxItems + 3);
    }

    return (
        <div>
            

            <div className="product-main">

                {
                    producto.map((obj, indice) => {
                        if (indice < proxItems) {
                            return <Producto key={obj.id} producto={obj} />
                        }
                    })
                }

                <div className="ver-mas-seccion">
                    <button className="boton-ver-mas" onClick={handleMostrarMas}>Ver Más</button>
                </div>
            </div>
        </div>

    )
}
