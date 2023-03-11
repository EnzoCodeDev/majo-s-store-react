import React, { useState } from 'react';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { SwiperNewClothes } from '../../components/swiper/SwiperNewClothes';
export const Home = () => {
    const [visible, setVisible] = useState(false);
    return (
        <AnimationPage>
            <div>
                <SwiperNewClothes />
            </div>
        </AnimationPage>
    )
}
