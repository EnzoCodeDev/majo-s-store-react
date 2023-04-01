import './about.scss';
import React from 'react';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AnimationPage } from '../../components/animation/AnimationPage';
import about1 from '../../assets/majos/about2.jpg';
import about2 from '../../assets/majos/about.jpg';

export const About = () => {
    let navigate = useNavigate();
    return (
        <AnimationPage>
            <div className='about'>
                <div className='about-container'>
                    <div className='conatiner-breadcrumb'>
                        <Breadcrumb separator=">" >
                            <Breadcrumb.Item className='cursor-poiner' onClick={() => navigate('/home')}>Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item>MAJO'S</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='about-intro'>
                        <div className='container-about'>
                            <div className='container-img-about'>
                                <img className="logo" src={about1} alt="Logo" />
                            </div>
                            <div className='container-text-about'>
                                <h3>En MAJO'S creemos que la moda no tiene porqué dañar nuestro planeta, somos conscientes y parcialmente sostenibles.</h3>
                                <p>Nuestro propósito es empoderar a las mujeres mediante una marca que cuida el medio ambiente, que tiene procesos sostenibles, que les brinda trabajo de calidad a sus colaboradores y que aporta al cambio de mentalidad.</p>
                                <span>Utilizamos el movimiento Slow Fashion, donde se pone como prioridad el inicio y el fin del producto y las personas que lo fabrican.</span>
                            </div>
                        </div>
                        <div className='container-about rever'>
                            <div className='container-img-about'>
                                <img className="logo" src={about2} alt="Logo" />
                            </div>
                            <div className='container-text-about'>
                                <p>Se produce una colección de una sola prenda al mes, la cual tiene una producción limitada. Las telas, en su mayoría, son con tejidos reciclados o fibras naturales. La estampación y color se obtiene por sublimación, no se utiliza agua en el proceso.</p>
                                <p>Bien sabemos que la industria de la moda es muy contaminante y nosotros como marca queremos dar un paso adelante contribuyendo a la reducción del consumo de plástico en esta industria, apoyando también el consumo local en nuestro país, Colombia, porque nosotros creemos que el vestir hace el cambio.</p>
                                <span>Gracias por apoyar.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationPage>
    )
}