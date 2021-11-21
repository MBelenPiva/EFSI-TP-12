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

<div class="all-title-box">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2>CONTACTOS</h2>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">HOME</a></li>
                    <li class="breadcrumb-item active"> CONTACTOS </li>
                </ul>
            </div>
        </div>
    </div>
</div>



<div class="contact-box-main">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-sm-12">
                <div class="contact-form-right">
                    <h2>Estemos en contacto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                    <form id="contactForm">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Su nombre" required data-error="Por favor ingrese su nombre"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" placeholder="Su Email" id="email" class="form-control" name="name" required data-error="Por favor ingrese su email"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="subject" name="name" placeholder="Telefono" required data-error="Por favor ingrese su telefono"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea class="form-control" id="message" placeholder="Su mensaje" rows="4" data-error="Escriba su mensaje" required></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="submit-button text-center">
                                    <button class="btn hvr-hover" id="submit" type="submit">Mandar mensaje</button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12">
                <div class="contact-info-left">
                    <h2>INFORMACION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    <ul>
                        <li>
                            <p><i class="fas fa-map-marker-alt"></i>Address: Michael I. Days 9000 <br/>Preston Street Wichita,<br/> KS 87213 </p>
                        </li>
                        <li>
                            <p><i class="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                        </li>
                        <li>
                            <p><i class="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
</div>
</div>




        </>
    );
}

export default Home;

