import React, { useState, Fragment } from 'react';

function Producto({producto}) {
    
    return (
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div class="products-single fix">
            <div class="box-img-hover">
                <div class="type-lb">
                    <p class="sale">Oferta</p>
                </div>
                <img src="./assets/images/img-pro-01.jpg" class="img-fluid" alt="Image"/>
                <div class="mask-icon">
                    <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="why-text">
                <h4>{producto.nombre}</h4>
                <h5> $9.79</h5>
            </div>
        </div>
    </div>
    );
}

export default Producto;