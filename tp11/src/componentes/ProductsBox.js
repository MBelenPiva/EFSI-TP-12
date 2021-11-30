import React, { useState, Fragment } from 'react';

function ProductsBox() {
return (


    <div className="products-box">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="title-all text-center">
                    <h1>Fruitas y Vegetales</h1>
                    <p>Frescas y seleccionadas especialmente por especialistas</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="special-menu text-center">
                    <div className="button-group filter-button-group">
                        <button className="active" data-filter="*">Todo</button>
                        <button data-filter=".top-featured">Productos destacados</button>
                        <button data-filter=".best-seller">Mas vendidos</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row special-list">
            <div className="col-lg-3 col-md-6 special-grid best-seller">
                <div className="products-single fix">
                    <div className="box-img-hover">
                        <div className="type-lb">
                            <p className="sale">Oferta</p>
                        </div>
                        <img src="./assets/images/img-pro-01.jpg" className="img-fluid" alt="Image"/>
                        <div className="mask-icon">
                            <ul>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                            </ul>
                          
                        </div>
                    </div>
                    <div className="why-text">
                        <h4>Zanahoria</h4>
                        <h5> $7.79</h5>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid top-featured">
                <div className="products-single fix">
                    <div className="box-img-hover">
                        <div className="type-lb">
                            <p className="new">Nuevo</p>
                        </div>
                        <img src="./assets/images/img-pro-02.jpg" className="img-fluid" alt="Image"/>
                        <div className="mask-icon">
                            <ul>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                            </ul>
                           
                        </div>
                    </div>
                    <div className="why-text">
                        <h4>Tomate</h4>
                        <h5> $9.79</h5>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid top-featured">
                <div className="products-single fix">
                    <div className="box-img-hover">
                        <div className="type-lb">
                            <p className="sale">Oferta</p>
                        </div>
                        <img src="./assets/images/img-pro-03.jpg" className="img-fluid" alt="Image"/>
                        <div className="mask-icon">
                            <ul>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                            </ul>
                           
                        </div>
                    </div>
                    <div className="why-text">
                        <h4>Uva</h4>
                        <h5> $10.79</h5>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid best-seller">
                <div className="products-single fix">
                    <div className="box-img-hover">
                        <div className="type-lb">
                            <p className="sale">Oferta</p>
                        </div>
                        <img src="./assets/images/img-pro-04.jpg" className="img-fluid" alt="Image"/>
                        <div className="mask-icon">
                            <ul>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="why-text">
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