import React from 'react';
import "./Footer.css";
// import { Row } from 'reactstrap';

class Footer extends React.Component{

    render(){
        return(
<section class="services center gradient">
        <h3>Ingresa a nuestras redes sociales:</h3>
        <div class="contain grid-3">
            <div>
                <a href="http://www.facebook.com"><i class="fab fa-facebook fa-5x"></i></a>
                <h3><a href="http://www.facebook.com">Facebook</a></h3>
                <p>Revisa cada uno de nuestros trabajos oficiales y no oficiales y comentanos</p>
            </div>
            <div>
                <a href="http://www.Instagram.com"><i class="fab fa-instagram-square fa-5x"></i></a>
                <h3><a href="http://www.Instagram.com">Instagram</a></h3>
                <p>Nuestras pequeñas historias decorativas</p>
            </div>
            <div>
                <a href="https://twitter.com/?lang=es"><i class="fab fa-twitter-square fa-5x"></i></a>
                <h3><a href="https://twitter.com/?lang=es">Twitter</a></h3>
                <p>Entérate de nuestros nuevos proyectos</p>
            </div>
        </div>
    </section>

        );
    }
}

export default Footer;





