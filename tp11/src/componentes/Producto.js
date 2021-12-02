import React, { useState, Fragment } from 'react';

function Producto({producto}) {
    
    return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="products-single fix">
            <div className="box-img-hover">
                <div className="type-lb">
                    <p className="sale">Oferta</p>
                </div>
                <img src={producto.imagen}className="img-fluid" alt="Image"/>
                <div className="mask-icon">
                    <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="why-text">
                <h4>{producto.nombre}</h4>
                <h5> {producto.precio}</h5>
            </div>
        </div>
    </div>
    );
}

export default Producto;