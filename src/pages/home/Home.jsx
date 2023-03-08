import React, { useState } from 'react';
import { SwiperNewClothes } from '../../components/swiper/SwiperNewClothes';
export const Home = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <SwiperNewClothes />
        </div>
    )
}
