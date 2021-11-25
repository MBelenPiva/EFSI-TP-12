import React, { useState, Fragment } from 'react';


function AboutBox() {
return (

<div class="about-box-main">
    <div class="container">		
        <div class="row my-4">
            <div class="col-12">
                <h2 class="noo-sh-title">Clientes destacados</h2>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="hover-team">
                    <div class="our-team"> <img src="./assets/images/img-1.jpg" alt="" />
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
                    <div class="our-team"> <img src="./assets/images/img-2.jpg" alt="" />
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
                    <div class="our-team"> <img src="./assets/images/img-3.jpg" alt="" />
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
                    <div class="our-team"> <img src="./assets/images/img-1.jpg" alt="" />
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

  );
}

export default AboutBox;