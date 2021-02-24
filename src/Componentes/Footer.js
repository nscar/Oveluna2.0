import React from 'react';
import Container from 'reactstrap/lib/Container';
import "./Footer.css";

class Footer extends React.Component{

    render(){
        return(
            
<section className="center-foot gradient">
        <h3>Visita nuestras redes sociales:</h3>
        <div >
            <Container className="contain grilla-3">
            <div>
                <a href="http://www.facebook.com"><i className="fab fa-facebook fa-5x"></i></a>
                <h3><a href="http://www.facebook.com">Facebook</a></h3>
                <p>Revisa cada uno de nuestros trabajos oficiales y no oficiales y dános tu opinión</p>
            </div>
            <div>
                <a href="http://www.Instagram.com"><i className="fab fa-instagram-square fa-5x"></i></a>
                <h3><a href="http://www.Instagram.com">Instagram</a></h3>
                <p>Nuestras pequeñas historias decorativas</p>
            </div>
            <div>
                <a href="https://twitter.com/?lang=es"><i className="fab fa-twitter-square fa-5x"></i></a>
                <h3><a href="https://twitter.com/?lang=es">Twitter</a></h3>
                <p>Entérate de nuestros nuevos proyectos</p>
            </div>
            </Container>
        </div>
    </section>

        );
    }
}

export default Footer;





