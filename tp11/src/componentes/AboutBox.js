import React from 'react';


function AboutBox() {
return (

<div className="about-box-main">
    <div className="container">		
        <div className="row my-4">
            <div className="col-12">
                <h2 className="noo-sh-title">Clientes destacados</h2>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="hover-team">
                    <div className="our-team"> <img src="./assets/images/img-1.jpg" alt="" />
                        <div className="team-content">
                            <h3 className="title">Mateo Bolado</h3> <span className="post">Web Developer</span> </div>
                       
                    </div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    </div>
                    <hr className="my-0"/> </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="hover-team">
                    <div className="our-team"> <img src="./assets/images/img-2.jpg" alt="" />
                        <div className="team-content">
                            <h3 className="title">Sofia Ferreira</h3> <span className="post">Web Developer</span> </div>
                       
                    </div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    </div>
                    <hr className="my-0"/> </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="hover-team">
                    <div className="our-team"> <img src="./assets/images/img-3.jpg" alt="" />
                        <div className="team-content">
                            <h3 className="title">Javier Park</h3> <span className="post">Web Developer</span> </div>
                        
                    </div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    </div>
                    <hr className="my-0"/> </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="hover-team">
                    <div className="our-team"> <img src="./assets/images/img-1.jpg" alt="" />
                        <div className="team-content">
                            <h3 className="title">Maximo Hernandez</h3> <span className="post">Web Developer</span> </div>
                      
                    </div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                    </div>
                    <hr className="my-0"/> </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default AboutBox;