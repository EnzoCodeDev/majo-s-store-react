import './home.scss';
import React from 'react';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { SwiperNewClothes } from '../../components/swiper/SwiperNewClothes';
import zusu from '../../assets/products/azzul/swiper/zusu.jpg';
import { AllCollection } from '../../components/all-collection/AllCollection';
export const Home = () => {
    return (

        <AnimationPage>
            <div className='container-home'>
                <SwiperNewClothes />
                <div className='container-presentation'>
                    <div className='presentation'>
                        <div className='container-img'>
                            <img src={zusu} alt="Cover_page" />
                        </div>
                        <div className='container-description'>
                            <h2>BIENVENIDO</h2>
                            <p>En Andrea Forster creemos en la Moda Sostenible y el Slow Fashion.</p>
                            <p>Nuestros tops son limitados, cada top tiene su propia personalidad y nombre, pero todos comparten un factor común… El combinar las raíces latinas con el estilo europeo. Muy pocas unidades por diseño y un solo diseño por mes.</p>
                            <p>Conócenos mejor</p>
                        </div>
                    </div>
                </div>
                <div className='all-collection'>
                    <h1>COLECCIÓN</h1>
                    <AllCollection />
                </div>
            </div>
        </AnimationPage>
    )
}
