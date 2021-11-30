import React, { useState, Fragment } from 'react';

function SlideShop() {
return (    

    <div id="slides-shop" className="cover-slides"data-ride="carousel">
    <ul className="slides-container">
        
        <li className="text-center">
            <img src="images/banner-01.jpg" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="m-b-20"><strong>Bienvenidos al</strong> <br/> Freshshop
                        </h1>
                    </div>
                </div>
            </div>
        </li>
        <li className="text-center">
            <img src="images/banner-02.jpg" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="m-b-20"><strong>Bienvenidos al <br/> Freshshop</strong></h1>
                    </div>
                </div>
            </div>
        </li>
        <li className="text-center">
            <img src="images/banner-03.jpg" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="m-b-20"><strong>Bienvenidos al <br/> Freshshop</strong></h1>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div className="slides-navigation">
        <a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
        <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
    </div>
</div>




);

}

export default SlideShop;