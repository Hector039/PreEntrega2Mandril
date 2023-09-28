
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ItemListContainer({ productos }) {

    const [filtroCategoria, setFiltroCategoria] = useState([]);
    const [targetIn, setTargetIn] = useState("todos");

    const [ordenar, setOrdenar] = useState([]);
    const [eventIn, setEventIn] = useState("todos");

    function filtrarPorCategoria(e) {
        setTargetIn(e.target.value);
    }

    function filtrarPrecio(e) {
        setEventIn(e.target.value);
    }

    useEffect(() => {
        const productosFiltrados = productos.filter((elemento) => {
            if (elemento.categoria === targetIn) {
                return (elemento);
            }else{
                return (elemento);
            }
        });
        console.log(targetIn);
        console.log(productosFiltrados);
        setFiltroCategoria(productosFiltrados);
    }, [targetIn])

   

    useEffect(() => {
        const productosOrdenados = filtroCategoria.sort(function (a, b) {
            if (eventIn === "menor") {
                return (a.precio - b.precio);
            } else if (eventIn === "mayor") {
                return (b.precio - a.precio);
            } else if (eventIn === "todos") {
                return filtroCategoria;
            }
        });
        console.log(eventIn);
        console.log(productosOrdenados);
        setOrdenar(productosOrdenados);
        }, [eventIn, filtroCategoria])

        console.log(productos);
        console.log(ordenar);
    return (
        <div className="item-list-container">
            <h1>Bienvenidos a nuestro Mercadito Verde</h1>

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
                    <select name="filter" id="filter-select" onChange={filtrarPrecio}>
                        <option value="todos">--Elige el Filtro/Ninguno--</option>
                        <option value="menor">Menor Precio</option>
                        <option value="mayor">Mayor precio</option>
                    </select>
                </div>

            </div>
            {
                ordenar.length > 0 ?
                    <ProductCard key={ordenar.id} productos={ordenar} /> :
                    <ProductCard key={productos.id} productos={productos} />
            }
        </div>
    )
}