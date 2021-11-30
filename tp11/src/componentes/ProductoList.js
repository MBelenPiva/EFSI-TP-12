import React from 'react';

function ProductoList({producto}) {
    return (
        <>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div className="products-single fix">
                <div className="box-img-hover">
                    <div className="type-lb">
                        <p className="new">Nuevo</p>
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
            </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
            <div className="why-text full-width">
                <h4>Batata</h4>
                <h5> <del>$ 60.00</del> $64</h5>
                <p>Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec, iaculis ultrices ante. Integer vitae suscipit nisi. Morbi dignissim risus sit amet orci porta, eget aliquam purus
                    sollicitudin. Cras eu metus felis. Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet eros. Donec accumsan nisi purus, quis euismod ex volutpat in. Vestibulum eleifend eros ac lobortis aliquet.
                    Suspendisse at ipsum vel lacus vehicula blandit et sollicitudin quam. Praesent vulputate semper libero pulvinar consequat. Etiam ut placerat lectus.</p>
            </div>
        </div>
        </>
    );
}

export default ProductoList;