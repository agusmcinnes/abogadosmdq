import React, {useEffect} from 'react'

const Areas = () => {

return (
    <section class="practice__section" id="areas">
            <div class="areas__info aparecerDerecha">
                <h2 class="areas__info-title">Áreas de práctica</h2>
                <span class="areas__info-subtitle">Cobertura Legal Integral</span>
                <p class="areas__info-text">Abarcamos diversas áreas de la representación letrada con el fin de brindar a nuestros clientes un servicio que resuelva todo tipo de conflictos y situaciones tanto de su vida profesional como personal.</p>
            </div>
            <div class="areas__types aparecerDerecha">
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">heart_broken</span>
                    <span>Daños y Perjuicios</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">contract_edit</span>
                    <span>Contratos</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">apartment</span>
                    <span>Pymes y Grandes empresas</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">gavel</span>
                    <span>Juicios ante Organismos administrativos</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">car_crash</span>
                    <span>Accidentes de tránsito</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">falling</span>
                    <span>Accidentes de trabajo</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">content_cut</span>
                    <span>Divorcios</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">person_off</span>
                    <span>Despidos</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">skull</span>
                    <span>Sucesiones</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">article</span>
                    <span>Regularización de registro laboral</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">person_alert</span>
                    <span>Maltrato y acoso laboral</span>
                </div>
                <div class="area__item aparecerScale">
                    <span class="material-symbols-outlined">work</span>
                    <span>Procesos ejecutivos</span>
                </div>
            </div>
    </section>
  )
}

export default Areas