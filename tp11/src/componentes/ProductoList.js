import React, { useState, Fragment,useContext } from 'react';
import { ProductosContext } from '../context/ProductosContext';
import Producto from './Producto';

function ProductoList({producto}) {
    const {productosActual, setFiltro,setOrdenamiento} = useContext(ProductosContext);
    return (
        <>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div className="products-single fix">
                <div className="box-img-hover">
                    <div className="type-lb">
                        <p className="new">Nuevo</p>
                    </div>
                    <img src={producto.imagen} className="img-fluid" alt="Image"/>
                    <div className="mask-icon">
                        <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
            <div className="why-text full-width">
                <h4>  {producto.nombre}</h4>
                <h5> <del>$ 60.00</del>   {producto.precio}</h5>
                <p>
                {producto.descripcion}

                </p>
            </div>
        </div>
        </>
    );
}

export default ProductoList;