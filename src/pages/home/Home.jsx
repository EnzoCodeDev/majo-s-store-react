import React from 'react';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { SwiperNewClothes } from '../../components/swiper/SwiperNewClothes';
export const Home = () => {
    return (
        <AnimationPage>
            <div>
                <SwiperNewClothes />
            </div>
        </AnimationPage>
    )
}
