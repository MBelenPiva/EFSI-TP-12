import React, { useState, Fragment } from 'react';

function ProductsBox() {
return (


    <div class="products-box">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="title-all text-center">
                    <h1>Fruitas y Vegetales</h1>
                    <p>Frescas y seleccionadas especialmente por especialistas</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="special-menu text-center">
                    <div class="button-group filter-button-group">
                        <button class="active" data-filter="*">Todo</button>
                        <button data-filter=".top-featured">Productos destacados</button>
                        <button data-filter=".best-seller">Mas vendidos</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row special-list">
            <div class="col-lg-3 col-md-6 special-grid best-seller">
                <div class="products-single fix">
                    <div class="box-img-hover">
                        <div class="type-lb">
                            <p class="sale">Oferta</p>
                        </div>
                        <img src="images/img-pro-01.jpg" class="img-fluid" alt="Image"/>
                        <div class="mask-icon">
                            <ul>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                            </ul>
                          
                        </div>
                    </div>
                    <div class="why-text">
                        <h4>Zanahoria</h4>
                        <h5> $7.79</h5>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 special-grid top-featured">
                <div class="products-single fix">
                    <div class="box-img-hover">
                        <div class="type-lb">
                            <p class="new">Nuevo</p>
                        </div>
                        <img src="images/img-pro-02.jpg" class="img-fluid" alt="Image"/>
                        <div class="mask-icon">
                            <ul>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                            </ul>
                           
                        </div>
                    </div>
                    <div class="why-text">
                        <h4>Tomate</h4>
                        <h5> $9.79</h5>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 special-grid top-featured">
                <div class="products-single fix">
                    <div class="box-img-hover">
                        <div class="type-lb">
                            <p class="sale">Oferta</p>
                        </div>
                        <img src="images/img-pro-03.jpg" class="img-fluid" alt="Image"/>
                        <div class="mask-icon">
                            <ul>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                            </ul>
                           
                        </div>
                    </div>
                    <div class="why-text">
                        <h4>Uva</h4>
                        <h5> $10.79</h5>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 special-grid best-seller">
                <div class="products-single fix">
                    <div class="box-img-hover">
                        <div class="type-lb">
                            <p class="sale">Oferta</p>
                        </div>
                        <img src="images/img-pro-04.jpg" class="img-fluid" alt="Image"/>
                        <div class="mask-icon">
                            <ul>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="why-text">
                        <h4>Papaya</h4>
                        <h5> $15.79</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



);

}

export default ProductsBox;