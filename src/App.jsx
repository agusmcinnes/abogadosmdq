import './styles.css';
import Carrousel from './Carrousel';
import Areas from './Areas';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState} from 'react';

import logo from './Imagenes-abogados/logoAbogados.webp'
import balanza3d from './Imagenes-abogados/balanza3d.webp'
import christian from './Imagenes-abogados/christianmcinnes.webp'
import alejandro from './Imagenes-abogados/alejandrogualdi.webp'
import flecha from './Imagenes-abogados/fast-backward-7740725-unscreen.gif'

function App() {

const [menuVisible, setMenuVisible] = useState(false);

const abrirMenu = () => {
    setMenuVisible(!menuVisible);
};

const cerrarMenu = () => {
    setMenuVisible(false);
};

useEffect(() => {
    // Opciones del observer para mejor control
    const options = {
      threshold: 0.1, // El elemento será visible cuando el 10% esté en viewport
      rootMargin: '0px'
    };

    const observerScale = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add('animacionScale');
            // Opcional: dejar de observar después de la animación
            observerScale.unobserve(entry.target);
            }
        });
        }, options);
    
        const elementosScale = document.querySelectorAll('.aparecerScale');
        elementosScale.forEach((elemento) => observerScale.observe(elemento));
  
    // Observer para elementos que vienen de la derecha
    const observerTitlesDerecha = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animacionDerecha');
          // Opcional: dejar de observar después de la animación
          observerTitlesDerecha.unobserve(entry.target);
        }
      });
    }, options);
  
    // Observer para elementos que vienen de la izquierda
    const observerTitlesIzquierda = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animacionIzquierda');
          // Opcional: dejar de observar después de la animación
          observerTitlesIzquierda.unobserve(entry.target);
        }
      });
    }, options);
  
    // Seleccionar y observar elementos
    const elementosDerecha = document.querySelectorAll('.aparecerDerecha');
    const elementosIzquierda = document.querySelectorAll('.aparecerIzquierda');
  
    elementosDerecha.forEach((elemento) => {
      observerTitlesDerecha.observe(elemento);
    });
  
    elementosIzquierda.forEach((elemento) => {
      observerTitlesIzquierda.observe(elemento);
    });
  
    // Limpieza al desmontar el componente
    return () => {
      elementosDerecha.forEach((elemento) => observerTitlesDerecha.unobserve(elemento));
      elementosIzquierda.forEach((elemento) => observerTitlesIzquierda.unobserve(elemento));
      elementosScale.forEach((elemento) => observerScale.unobserve(elemento));
    };
  }, []);


return (
    <div className="App">
        <header>
        <button className='open__button' onClick={abrirMenu} title='menu'>
            <FontAwesomeIcon icon={faBars} />
            
            </button>

            <nav className={`nav ${menuVisible ? 'visible' : ''}`}>
            <button className='close__button' onClick={cerrarMenu} title='close'>
                <FontAwesomeIcon icon={faX} />
            </button>
            <ul className="nav__list">
            <li className="nav__item">
                <a href="#conocenos" onClick={cerrarMenu} className="nav__link">Conocenós</a>
            </li>
            <li className="nav__item">
                <a href="#equipo" onClick={cerrarMenu} className="nav__link">Equipo</a>
            </li>
            <li className="nav__item">
                <a href="#clientes" onClick={cerrarMenu} className="nav__link">Clientes</a>
            </li>
            <li className="nav__item">
                <a href="#areas" onClick={cerrarMenu} className="nav__link">Áreas</a>
            </li>
            </ul>
        </nav>
        </header>
        <section className='first__page'>

            <div className='juzgado-img'></div>

            <div className='first__page-text'>
                <h1>Mc Innes & Gualdi <br /><span className='title__estudio'>Estudio Juridico</span></h1>

                <a href="#footer" className='button__contact'>Contactanos</a>
                <img src={flecha} alt="flecha" loading='lazy'/>
            </div>
        </section>
        <section className='conocenos' id='conocenos'>
            <div className='conocenos__text-wrapper'>
                <h2 className='conocenos__title'>Conócenos</h2>
                <p className='conocenos__text aparecerIzquierda'>
                Somos un estudio jurídico en Mar del Plata con más de 50 años de trayectoria, surgido del Estudio Jurídico Vázquez, Ávila & Asociados.
                </p>
                <p className='conocenos__text aparecerIzquierda'>
                Nos enfocamos en mantener contacto cercano con los directores y administradores de las firmas que asesoramos, así como con sus empleados y lugares de trabajo. 
                </p>
                <p className='conocenos__text aparecerIzquierda'>
                Ofrecemos servicios de asesoramiento y consultoría jurídica, y participamos activamente en la resolución judicial y extrajudicial de conflictos en Mar del Plata, otras jurisdicciones de la provincia de Buenos Aires y en la Ciudad Autónoma de Buenos Aires.
                </p>
            </div>
            <div className='conocenos__img aparecerDerecha' >
                <img src={balanza3d} alt="" className='balanza3d' loading='lazy'/>
            </div>
        </section>
        <section className='banner banner1'>
            <h3 className='banner__title aparecerScale'>Transparencia y confianza en cada paso</h3>
        </section>
        <section className='team' id='equipo'>
            <h2 className='team__title'>Nuestro equipo</h2>
            <div className='card__wrapper'>
            <div className='card aparecerIzquierda'>
                <img src={christian} alt="" className='card__img'/>
                <div className='text__wrapper'>
                    <h2 className='team__name'>Christian Mc innes</h2>
                    <span className='christian__subtitle'>Especialista en derecho del trabajo</span>
                    <ul class="card__list">
                            <li class="card__list-item">
                                <a href="https://mail.google.com/mail/u/0/?hl=es#inbox?compose=new" target="_blank">Mcinnes@legalesmdq.com.ar</a>
                            </li>
                            <li class="card__list-item">
                                <a href="tel: +5492235599111">+54 9 223 559-9111</a>
                            </li>
                            <li class="card__list-item">Formacion - UNMDP</li>
                            <li class="card__list-item">Posgrado - UBA</li>
                        </ul>
                </div>
            </div>
            <div className='card aparecerDerecha'>
                <img src={alejandro} alt="" className='card__img'/>
                <div className='text__wrapper'>
                    <h2 className='team__name'>Alejandro Gualdi</h2>
                    <span className='christian__subtitle'>Abogado</span>
                    <ul class="card__list">
                            <li class="card__list-item">
                                <a href="https://mail.google.com/mail/u/0/?hl=es#inbox?compose=new" target="_blank">Gualdi@legalesmdq.com.ar</a>
                            </li>
                            <li class="card__list-item">
                                <a href="tel: +5492236108604">+54 9 223 610-8604</a>
                            </li>
                            <li class="card__list-item">Formacion - UNMDP</li>
                        </ul>
                </div>
            </div>

            </div>
        </section>
        <section className='banner banner2'>
            <h3 className='banner__title aparecerScale'>Defensa legal experta y comprometida</h3>
        </section>
        <section className='clientes' id='clientes'>
        <div className='clients__text-wrapper aparecerIzquierda'>
            <h2 className='clients__title'>Clientes</h2>
            <p className='clients__text'>Prestigiosas firmas multinacionales y destacadas empresas de Mar del Plata y la región confían en nosotros para su representación legal. A lo largo de los años, hemos forjado relaciones sólidas y duraderas, basadas en la confianza y el compromiso mutuo.</p>
        </div>
        <Carrousel></Carrousel>
        </section>
        <Areas></Areas>
        <footer id="footer">
        <div class="footer__content">
        <div className='logo__footer-container'>
        <img src={logo} alt="" className='logo__footer'/>
        </div>

            <div class="footer__contact">
                <div class="footer__contact-title">
                    <span>Contáctenos</span>
                </div>
                <div class="footer__contact-info">
                    <div class="footer__contact-item">
                        <span class="material-symbols-outlined icon">mail</span>
                        <a href="https://mail.google.com/mail/u/0/?hl=es#inbox?compose=new" target="_blank">info@legalesmdq.com.ar</a>
                    </div>
                    <div class="footer__contact-item">
                        <span class="material-symbols-outlined icon">phone_iphone</span>
                        <div class="footer__contact-item-cell">
                            <a href="tel: +542234860888">+54 223 486 0888</a>
                            <a href="tel: +542234860999">+54 223 486 0999</a>
                        </div>
                    </div> 
                    <div class="footer__contact-item">
                        <span class="material-symbols-outlined icon">location_on</span>
                        <div class="footer__contact-item-direc">
                            <span className='mardel'>Mar del Plata - Argentina</span>
                            <br />
                            <a href="https://www.google.com/maps/place/Falucho+1254,+B7600FPZ+Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.0120343,-57.5407601,17z/data=!3m1!4b1!4m6!3m5!1s0x9584dc3b96cc3c0d:0xa873a76a0519ce34!8m2!3d-38.0120386!4d-57.5381852!16s%2Fg%2F11lj06xxdc?entry=ttu" target="_blank">Falucho 1254</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <span>Desarrollado por: <a href="https://stairus.net/">Stairus</a></span>
            <span>© 2025 Mc Innes - Gualdi Abogados / Todos los derechos reservados.</span>
        </div>
    </footer>
    </div>
);
}

export default App;
