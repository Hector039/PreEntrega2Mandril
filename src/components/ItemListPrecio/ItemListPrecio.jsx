import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";



export default function SeccionVerMas({ productos }) {
    

    return (
            <div className="product-main">

                {
                    ordenar.length > 0 ?
                            <ProductCard key={ordenar.id} producto={ordenar} />   :
                            <ProductCard key={productos.id} producto={productos} />
                    
                }
            </div>


    )



}


