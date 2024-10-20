import React, {useEffect} from 'react'

import camaron from './Imagenes-abogados/camaron.png'
import cencosud from './Imagenes-abogados/cencosud.png'
import musimundo from './Imagenes-abogados/musimundo.png'
import eco from './Imagenes-abogados/eco.png'
import astillero from './Imagenes-abogados/astillero.png'
import serenisima from './Imagenes-abogados/serenisima.png'
import cabolargo from './Imagenes-abogados/cabolargo.png'
import danone from './Imagenes-abogados/danone.png'
import sheraton from './Imagenes-abogados/sheraton.webp'
import antares from './Imagenes-abogados/antares.webp'


const Carrousel = () => {



    useEffect(() => {
        const carrousel = document.querySelector('.carrousel'); // Selecciona el contenedor carrousel
        const logos = document.querySelectorAll('.logos'); // Selecciona los elementos logos
    
        const observerCarrousel = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              logos.forEach((logo) => logo.classList.add('sliderNew')); // Agrega la clase a los logos
            }
          });
        });
    
        if (carrousel) {
          observerCarrousel.observe(carrousel); // Observa el contenedor carrousel
        }
    
        // Cleanup
        return () => {
          if (carrousel) {
            observerCarrousel.unobserve(carrousel);
          }
        };
      }, []);
    
  
    return (
        <div className='carrousel'>
          <div className='logos__wrapper'>
            <div className='logos addSlider'>
                <img src={camaron} alt="camaron" className='client__logo' loading='lazy' />
                <img src={cencosud} alt="cencosud" className='client__logo' loading='lazy'/>
                <img src={musimundo} alt="musimundo" className='client__logo' loading='lazy' />
                <img src={eco} alt="eco" className='client__logo' loading='lazy'/>
                <img src={serenisima} alt="serenisima" className='client__logo' loading='lazy' />
                <img src={astillero} alt="astillero" className='client__logo' loading='lazy'/>
                <img src={danone} alt="danone" className='client__logo' loading='lazy' />
                <img src={cabolargo} alt="cabolargo" className='client__logo' loading='lazy'/>
                <img src={sheraton} alt="sheraton" className='client__logo' loading='lazy' />
                <img src={antares} alt="antares" className='client__logo' loading='lazy'/>
                
            </div>
            <div className='logos addSlider'>
            <img src={camaron} alt="camaron" className='client__logo' loading='lazy' />
                <img src={cencosud} alt="cencosud" className='client__logo' loading='lazy'/>
                <img src={musimundo} alt="musimundo" className='client__logo' loading='lazy' />
                <img src={eco} alt="eco" className='client__logo' loading='lazy'/>
                <img src={serenisima} alt="serenisima" className='client__logo' loading='lazy' />
                <img src={astillero} alt="astillero" className='client__logo' loading='lazy'/>
                <img src={danone} alt="danone" className='client__logo' loading='lazy' />
                <img src={cabolargo} alt="cabolargo" className='client__logo' loading='lazy'/>
                <img src={sheraton} alt="sheraton" className='client__logo' loading='lazy' />
                <img src={antares} alt="antares" className='client__logo' loading='lazy'/>
            </div>

          </div>
        </div>

    )
}

export default Carrousel