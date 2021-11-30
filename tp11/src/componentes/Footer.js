import React from 'react';

function Footer() {
return (

    <footer>
    <div className="footer-main">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="footer-top-box">
                        <h3>Business Time</h3>
                        <ul className="list-time">
                            <li>Lunes - Viernes: 08.00am hasta 05.00pm</li> <li>Sabado: 10.00am hasta 08.00pm</li> <li>Domingo: <span>Cerrado</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="footer-link-contact">
                        <h4>Contactanos</h4>
                        <ul>
                            <li>
                                <p><i className="fas fa-map-marker-alt"></i>Direccion: Michael I. Days 3756 <br/>Preston Street Wichita,<br/> KS 67213 </p>
                            </li>
                            <li>
                                <p><i className="fas fa-phone-square"></i>Telefono: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                            </li>
                            <li>
                                <p><i className="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="footer-top-box">
                        <h3>Redes sociales</h3>
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
</footer>



);
}

export default Footer;
