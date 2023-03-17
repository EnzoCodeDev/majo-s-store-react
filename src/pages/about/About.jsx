import './about.scss';
import React from 'react';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AnimationPage } from '../../components/animation/AnimationPage';
import azul1 from '../../assets/products/azzul/present/azzul_1.jpg';

export const About = () => {
    let navigate = useNavigate();
    return (
        <AnimationPage>
            <div className='about'>
                <div className='about-container'>
                    <div className='conatiner-breadcrumb'>
                        <Breadcrumb separator=">" >
                            <Breadcrumb.Item className='cursor-poiner' onClick={() => navigate('/home')}>Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item>MAJO´S</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='about-intro'>
                        <div className='container-about'>
                            <div className='container-img-about'>
                                <img className="logo" src={azul1} alt="Logo" />
                            </div>
                            <div className='container-text-about'>
                                <h3>En Andrea Forster creemos en la moda sostenible mediante la venta de tops amigables con el medio ambiente, queremos entregar diseño, exclusividad y calidad sin problemas de conciencia. Más que una marca de ropa, somos un estilo de vida.</h3>
                                <p>Los tops son limitados, cada top tiene su propia personalidad y nombre, pero todos comparten un factor común… El combinar las raíces latinas con el estilo europeo. Muy pocas unidades por diseño y un solo diseño por mes. El empaque, la etiqueta y marquilla han sido preparados con mucho cuidado, amor y atención a los detalles, y por supuesto también son sostenibles!</p>
                                <span>En Andrea Forster compartimos un gran amor por Colombia, por lo que decidimos producir local.</span>
                                <p>Esperamos poder devolverle algo a este hermoso país que nos ha dado tanto! Y por supuesto a la gente que nos muestra su amor y apoyo en cada paso que damos.Esperamos poder devolverle algo a este hermoso país que nos ha dado tanto! Y por supuesto a la gente que nos muestra su amor y apoyo en cada paso que damos.</p>
                            </div>
                        </div>
                        <div className='container-about rever'>
                            <div className='container-img-about'>
                                <img className="logo" src={azul1} alt="Logo" />
                            </div>
                            <div className='container-text-about'>
                                <h3>SOBRE NOSOTROS</h3>
                                <p>Somos Andrea Rodriguez y Joshua Forster, nuestra historia comenzó 2 años antes de crear Andrea Forster. Somos una pareja de una colombiana y un suizo enamorados de la vida. Teníamos vidas y planes muy diferentes cada uno por su lado, pero nuestro amor se volvió tan real que decidimos darle una oportunidad, ¡y si que valió la pena!</p>
                                <p>Esperamos poder devolverle algo a este hermoso país que nos ha dado tanto! Y por supuesto a la gente que nos muestra su amor y apoyo en cada paso que damos.Esperamos poder devolverle algo a este hermoso país que nos ha dado tanto! Y por supuesto a la gente que nos muestra su amor y apoyo en cada paso que damos.</p>
                                <span>Nos encanta viajar, disfrutar de la naturaleza y de los pequeños momentos y Andrea Forster es nuestra expresión de eso, estamos tratando en hacer y entregar lo mejor para ustedes.</span>
                            </div>
                        </div>
                        <div className='container-about'>
                            <div className='container-img-about'>
                                <img className="logo" src={azul1} alt="Logo" />
                            </div>
                            <div className='container-text-about'>
                                <h3>SOSTENIBILIDAD</h3>
                                <h3>En Andrea Forster entendemos el daño que el fast fashion causa en el medio ambiente, y por eso decidimos dar un paso en una dirección sostenible.</h3>
                                <p>La industria de la moda produce el 10% de todas las emisiones de carbono de la humanidad, y es el segundo mayor consumidor del suministro de agua del mundo, también genera una cantidad significativa de residuos plásticos.</p>
                                <p>Por esto queremos tomar la iniciativa y demostrar que no hace falta mucho para vivir de forma más sostenible. Nuestro objetivo es contribuir a la reducción del consumo de plástico en la industria de la moda. Nuestros tops se producen principalmente con algodón reciclado y plástico reciclado, el proceso de color se hace por sublimación (sin agua) y lo mejor, todo es hecho en Colombia.</p>
                                <span>Gracias por estar acá.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationPage>
    )
}