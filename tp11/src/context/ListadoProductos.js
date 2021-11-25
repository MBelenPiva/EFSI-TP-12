import React,{useContext} from 'react';

import { ProductosContext } from '../context/ProductosContext';

 

const ListadoProductos = () => {

    const {productos} = useContext(ProductosContext);

    return (

        <div className="row mt-5">

            {productos.map(productos =>(

                <h1>Producto {productos.name}</h1>  

            ))}

        </div>

     );

}

export default ListadoProductos;

 