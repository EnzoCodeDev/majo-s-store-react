import './home.scss';
import React from 'react';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { SwiperNewClothes } from '../../components/swiper/SwiperNewClothes';
import welcome from '../../assets/majos/welcome.jpg';
import { AllCollection } from '../../components/all-collection/AllCollection';
export const Home = () => {
    return (

        <AnimationPage>
            <div className='container-home'>
                <SwiperNewClothes />
                <div className='container-presentation'>
                    <div className='presentation'>
                        <div className='container-img'>
                            <img src={welcome} alt="Cover_page" />
                        </div>
                        <div className='container-description'>
                            <h2>BIENVENIDO</h2>
                            <p>En MAJO`S creemos que la moda no tiene porqué dañar nuestro planeta, somos conscientes y parcialmente sostenibles.</p>
                            <p>Se produce una colección de una sola prenda al mes, la cual tiene una producción limitada. Las telas, en su mayoría, son con tejidos reciclados o fibras naturales. La estampación y color se obtiene por sublimación, no se utiliza agua en el proceso.</p>
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
