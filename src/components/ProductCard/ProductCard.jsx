import Producto from "../Producto/Producto";


export default function ProductCard ({productos}){
    
    const productosAleatorios = productos.sort(()=> Math.random() - 0.5);
    
    return(
        <div className="product-main">
                
                {
                productosAleatorios.length > 0 &&
                productosAleatorios.map((obj, indice) => {
                    if(indice < 3){
                        return (
                        <Producto key={obj.id} producto={obj}/>
                    )
                    }
                    
                })
            }

        
    </div>
    )
}
