import React from 'react';

function ContactBox() {
return (

    
    <div className="contact-box-main">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-sm-12">
                <div className="contact-form-right">
                    <h2>Estemos en contacto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                    <form id="contactForm">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Su nombre" required data-error="Por favor ingrese su nombre"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" placeholder="Su Email" id="email" className="form-control" name="name" required data-error="Por favor ingrese su email"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="subject" name="name" placeholder="Telefono" required data-error="Por favor ingrese su telefono"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea className="form-control" id="message" placeholder="Su mensaje" rows="4" data-error="Escriba su mensaje" required></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="submit-button text-center">
                                    <button className="btn hvr-hover" id="submit" type="submit">Mandar mensaje</button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12">
                <div className="contact-info-left">
                    <h2>INFORMACION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    <ul>
                        <li>
                            <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 9000 <br/>Preston Street Wichita,<br/> KS 87213 </p>
                        </li>
                        <li>
                            <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                        </li>
                        <li>
                            <p><i className="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
</div>
</div>

);
}

export default ContactBox;
