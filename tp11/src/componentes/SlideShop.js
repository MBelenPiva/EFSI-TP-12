import React, { useState, Fragment } from 'react';

function SlideShop() {
return (    

    <div id="slides-shop" class="cover-slides"data-ride="carousel">
    <ul class="slides-container">
        
        <li class="text-center">
            <img src="images/banner-01.jpg" alt=""/>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Bienvenidos al</strong> <br/> Freshshop
                        </h1>
                    </div>
                </div>
            </div>
        </li>
        <li class="text-center">
            <img src="images/banner-02.jpg" alt=""/>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Bienvenidos al <br/> Freshshop</strong></h1>
                    </div>
                </div>
            </div>
        </li>
        <li class="text-center">
            <img src="images/banner-03.jpg" alt=""/>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Bienvenidos al <br/> Freshshop</strong></h1>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div class="slides-navigation">
        <a href="#" class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
        <a href="#" class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
    </div>
</div>




);

}

export default SlideShop;