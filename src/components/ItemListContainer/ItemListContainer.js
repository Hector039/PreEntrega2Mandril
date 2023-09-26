
import { useEffect, useState } from "react";
import datos from "../Data/productos.json";
import ProductCard from "../ProductCard/ProductCard";
import SeccionVerMas from "../SeccionVerMas/SeccionVerMas";

export default function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([]);

    const tomarProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(datos)
        })
    }

    useEffect(() => {
        tomarProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])
    
    console.log(productos);



    const [filtroCategoria, setFiltroCategoria] = useState([...productos]);

    console.log(filtroCategoria);


    function filtrarPorCategoria(e) {
        let categoria = e.target.value;
        const productosFiltrados = productos.filter((obj) => {
            if (obj.categoria === categoria) {
                return (obj)
            }else if(categoria === "todos"){
                return (obj)
            }
        })
        setFiltroCategoria(productosFiltrados);
    }

    function filtrarPorPrecio (e){
        let ordenPrecio = e.target.value;
        if (productosFiltrados.lenght === 0 && ordenPrecio === "menor"){
            const productosFiltradosPrecio = productos.sort(function(a, b){
                return a - b;
            } )
        }
    }
    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>

            <div className="filter-container">
                <div className="category-filter">
                    <label htmlFor="category-select">Categoria:</label>
                    <select name="categorias" id="category-select" onChange={filtrarPorCategoria}>
                        <option value="todos">--Todos los productos--</option>
                        <option value="Bebidas Vegetales">Bebidas Vegetales</option>
                        <option value="Granolas y Cereales">Granolas y Cereales</option>
                        <option value="Frutos Secos">Frutos Secos</option>
                        <option value="Dulces y Chocolates">Dulces y Chocolates</option>
                        <option value="Congelados">Congelados</option>
                    </select>
                </div>

                <div className="filter-filter">
                    <label htmlFor="filter-select">Filtrar:</label>
                    <select name="filter" id="filter-select">
                        <option value="todos">--Elige el Filtro/Ninguno--</option>
                        <option value="menor">Menor Precio</option>
                        <option value="mayor">Mayor precio</option>
                    </select>
                </div>
            </div>
            {
                filtroCategoria.length > 0 ? 
                <><ProductCard key={filtroCategoria.id} productos={filtroCategoria} />
                <SeccionVerMas key={filtroCategoria.id} productos={filtroCategoria} /></> : 
                <><ProductCard key={productos.id} productos={productos} />
                <SeccionVerMas key={productos.id} productos={productos} /></>
                
            }
            
        </div>

    )

}