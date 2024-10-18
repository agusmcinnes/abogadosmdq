import React, {useEffect} from 'react'

import camaron from './Imagenes-abogados/camaron.svg'
import cencosud from './Imagenes-abogados/cencosud.svg'


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
            </div>
            <div className='logos addSlider'>
                <img src={camaron} alt="antares" className='client__logo' loading='lazy' />
                <img src={cencosud} alt="cencosud" className='client__logo' loading='lazy'/>
            </div>

          </div>
        </div>

    )
}

export default Carrousel