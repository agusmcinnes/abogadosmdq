import './styles.css';
import Carrousel from './Carrousel';

import logo from './Imagenes-abogados/logoAbogados.webp'
import juzgado from './Imagenes-abogados/top-view-career-guidance-items-judges.jpg'
import balanza3d from './Imagenes-abogados/balanza3d.webp'
import christian from './Imagenes-abogados/christianmcinnes.webp'
import alejandro from './Imagenes-abogados/alejandrogualdi.webp'
import flecha from './Imagenes-abogados/fast-backward-7740725-unscreen.gif'

function App() {
  return (
    <div className="App">
        <header>
          <div className='logo'>
            <img src={logo} alt="" className='logo'/>
          </div>

          <nav className='nav'>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">Conocenós</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Equipo</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Clientes</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Áreas</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className='first__page'>

            <div className='juzgado-img'></div>

            <div className='first__page-text'>
                <h1>Mc Innes & Gualdi <br /><span className='title__estudio'>Estudio Juridico</span></h1>

                <a href="#" className='button__contact'>Contactanos</a>
                <img src={flecha} alt="" />
            </div>
        </section>
        <section className='conocenos'>
            <div className='conocenos__text-wrapper'>
                <h2 className='conocenos__title'>Conócenos</h2>
                <p className='conocenos__text'>
                Somos un estudio jurídico en Mar del Plata con más de 50 años de trayectoria, surgido del Estudio Jurídico Vázquez, Ávila & Asociados.
                </p>
                <p className='conocenos__text'>
                Nos enfocamos en mantener contacto cercano con los directores y administradores de las firmas que asesoramos, así como con sus empleados y lugares de trabajo. 
                </p>
                <p className='conocenos__text'>
                Ofrecemos servicios de asesoramiento y consultoría jurídica, y participamos activamente en la resolución judicial y extrajudicial de conflictos en Mar del Plata, otras jurisdicciones de la provincia de Buenos Aires y en la Ciudad Autónoma de Buenos Aires.
                </p>
            </div>
            <div className='conocenos__img'>
                <img src={balanza3d} alt="" className='balanza3d'/>
                <div className='años50'>+50 AÑOS DE EXPERIENCIA</div>
            </div>
        </section>
        <section className='banner banner1'>
            <h3 className='banner__title'>Transparencia y confianza en cada paso</h3>
        </section>
        <section className='team'>
            <h2 className='team__title'>Nuestro equipo</h2>
            <div className='card__wrapper'>
              <div className='card'>
                  <img src={christian} alt="" className='card__img'/>
                  <div className='text__wrapper'>
                      <h4 className='team__name'>Christian Mc innes</h4>
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
              <div className='card'>
                  <img src={alejandro} alt="" className='card__img'/>
                  <div className='text__wrapper'>
                      <h4 className='team__name'>Alejandro Gualdi</h4>
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
            <h3 className='banner__title'>Defensa legal experta y comprometida</h3>
        </section>
        <section className='clientes'>
          <div className='clients__text-wrapper'>
              <h2 className='clients__title'>Clientes</h2>
              <p className='clients__text'>Prestigiosas firmas multinacionales y destacadas empresas de Mar del Plata y la región confían en nosotros para su representación legal. A lo largo de los años, hemos forjado relaciones sólidas y duraderas, basadas en la confianza y el compromiso mutuo.</p>
          </div>
          <Carrousel></Carrousel>
        </section>
    </div>
  );
}

export default App;
