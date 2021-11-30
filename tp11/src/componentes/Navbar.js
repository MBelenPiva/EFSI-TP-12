import React from 'react';



function Navbar() {
    return (

<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
<div className="container">
 
    <div className="navbar-header">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars"></i>
    </button>
        <a className="navbar-brand" href="index.html"><img src="images/logo.png" className="logo" alt=""/></a>
    </div>
   
    <div className="collapse navbar-collapse" id="navbar-menu">
        <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
            <li className="nav-item active"><a className="nav-link" href="/">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="/shop">SHOP</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">CONTACTOS</a></li>
        </ul>
    </div>
    

    
    <div className="attr-nav">
        <ul>
            <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
            <li className="side-menu">
                
            </li>
        </ul>
    </div>
    
</div>

<div className="side">
    <a href="#" className="close-side"><i className="fa fa-times"></i></a>
    <li className="cart-box">
        <ul className="cart-list">
            <li>
                <a href="#" className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb" alt="" /></a>
                <h6><a href="#">Delica omtantur </a></h6>
                <p>1x - <span className="price">$80.00</span></p>
            </li>
            <li>
                <a href="#" className="photo"><img src="images/img-pro-02.jpg" className="cart-thumb" alt="" /></a>
                <h6><a href="#">Omnes ocurreret</a></h6>
                <p>1x - <span className="price">$60.00</span></p>
            </li>
            <li>
                <a href="#" className="photo"><img src="images/img-pro-03.jpg" className="cart-thumb" alt="" /></a>
                <h6><a href="#">Agam facilisis</a></h6>
                <p>1x - <span className="price">$40.00</span></p>
            </li>
            <li className="total">
                <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                <span className="float-right"><strong>Total</strong>: $180.00</span>
            </li>
        </ul>
    </li>
</div>

</nav>


);
}

export default Navbar;