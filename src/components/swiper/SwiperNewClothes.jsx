import React from 'react'

import './swiperNewClothes.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";

export const SwiperNewClothes = () => {
    let productActual = 'azzul';
    let product = [{
        title: 'Hola mundo',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        img: `/products/${productActual}/swiper/${productActual}_1.jpg`,
        url: 'https://github.com/sergioDavidCano',
    }, {
        title: 'Hola mundo',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        img: `/products/${productActual}/swiper/${productActual}_2.jpg`,
        url: 'https://github.com/sergioDavidCano',
    }, {
        title: 'Hola mundo',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        img: `/products/${productActual}/swiper/${productActual}_3.jpg`,
        url: 'https://github.com/sergioDavidCano',
    }, {
        title: 'Hola mundo',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        img: `/products/${productActual}/swiper/${productActual}_4.jpg`,
        url: 'https://github.com/sergioDavidCano',
    }];
    return (
        <section id="proyect" className="seccion-proyect">
            <div className='container-swiper'>
                <Swiper
                    rewind={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, EffectFade, Pagination]}
                    className="mySwiper"
                >
                    {product.map((item, index) => (
                        <SwiperSlide>
                            <div className="container">
                                <div className="container-header">
                                    <img className="container-img-header" src={item['img']} alt="Cover_page" />
                                    <div className="container-text">
                                        <p className='container-text__1' >¡Hola! soy</p>
                                        <p className='container-text__2' >Sergio cano </p>
                                        <p className='container-text__3' >Programador de software</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}