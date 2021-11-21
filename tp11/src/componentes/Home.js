import React from 'react'; 


const Home = () => {
    
    return(
        <>

<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
<div class="container">
 
    <div class="navbar-header">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars"></i>
    </button>
        <a class="navbar-brand" href="index.html"><img src="images/logo.png" class="logo" alt=""/></a>
    </div>
   
    <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
            <li class="nav-item active"><a class="nav-link" href="index.html">HOME</a></li>
            <li class="dropdown">
                <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                <ul class="dropdown-menu">
                    <li><a href="shop.html">IR AL SHOP</a></li>
                </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="contact-us.html">CONTACTOS</a></li>
        </ul>
    </div>
    

    
    <div class="attr-nav">
        <ul>
            <li class="search"><a href="#"><i class="fa fa-search"></i></a></li>
            <li class="side-menu">
                
            </li>
        </ul>
    </div>
    
</div>

<div class="side">
    <a href="#" class="close-side"><i class="fa fa-times"></i></a>
    <li class="cart-box">
        <ul class="cart-list">
            <li>
                <a href="#" class="photo"><img src="images/img-pro-01.jpg" class="cart-thumb" alt="" /></a>
                <h6><a href="#">Delica omtantur </a></h6>
                <p>1x - <span class="price">$80.00</span></p>
            </li>
            <li>
                <a href="#" class="photo"><img src="images/img-pro-02.jpg" class="cart-thumb" alt="" /></a>
                <h6><a href="#">Omnes ocurreret</a></h6>
                <p>1x - <span class="price">$60.00</span></p>
            </li>
            <li>
                <a href="#" class="photo"><img src="images/img-pro-03.jpg" class="cart-thumb" alt="" /></a>
                <h6><a href="#">Agam facilisis</a></h6>
                <p>1x - <span class="price">$40.00</span></p>
            </li>
            <li class="total">
                <a href="#" class="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                <span class="float-right"><strong>Total</strong>: $180.00</span>
            </li>
        </ul>
    </li>
</div>

</nav>



<div class="top-search">
    <div class="container">
        <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
            <input type="text" class="form-control" placeholder="Search"/>
            <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
        </div>
    </div>
</div>




<div id="slides-shop" class="cover-slides">
    <ul class="slides-container">
        <li class="text-center">
            <img src=".public/assets/images/banner-01.jpg" alt=""/>
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
            <img src="%PUBLIC_URL%/assets/images/banner-02.jpg" alt=""/>
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



<div class="about-box-main">
    <div class="container">		
        <div class="row my-4">
            <div class="col-12">
                <h2 class="noo-sh-title">Clientes destacados</h2>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="hover-team">
                    <div class="our-team"> <img src="%PUBLIC_URL%/assets/images/img-1.jpg" alt="" />
                        <div class="team-content">
                            <h3 class="title">Mateo Bolado</h3> <span class="post">Web Developer</span> </div>
                       
                    </div>
                    <div class="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    </div>
                    <hr class="my-0"/> </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="hover-team">
                    <div class="our-team"> <img src="images/img-2.jpg" alt="" />
                        <div class="team-content">
                            <h3 class="title">Sofia Ferreira</h3> <span class="post">Web Developer</span> </div>
                       
                    </div>
                    <div class="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    </div>
                    <hr class="my-0"/> </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="hover-team">
                    <div class="our-team"> <img src="images/img-3.jpg" alt="" />
                        <div class="team-content">
                            <h3 class="title">Javier Park</h3> <span class="post">Web Developer</span> </div>
                        
                    </div>
                    <div class="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    </div>
                    <hr class="my-0"/> </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="hover-team">
                    <div class="our-team"> <img src="images/img-1.jpg" alt="" />
                        <div class="team-content">
                            <h3 class="title">Maximo Hernandez</h3> <span class="post">Web Developer</span> </div>
                      
                    </div>
                    <div class="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    </div>
                    <hr class="my-0"/> </div>
            </div>
        </div>
    </div>
</div>





        </>
    );
}

export default Home;

