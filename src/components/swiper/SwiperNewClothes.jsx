import React from 'react'

import './swiperNewClothes.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import { Button } from 'antd';
import Scroll from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { dataProducts } from '../../data/dataProducts';

export const SwiperNewClothes = () => {
    let navigate = useNavigate();
    let productActual = dataProducts[dataProducts['ultime']]['swiper'];
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
                    {productActual['img'].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="container">
                                <div className="container-header">
                                    <img className="container-img-header" src={item} alt="Cover_page" />
                                    <div className="container-text">
                                        <p className='container-text__1' >NUEVO PRODUCTO</p>
                                        <p className='container-text__2' >{productActual['title']} </p>
                                        <Button onClick={() => {
                                            let scroll = Scroll.animateScroll;
                                            navigate(`/detail/${productActual['redirect']}`);
                                            scroll.scrollToTop();
                                        }} className='buttom' size="large" type="primary">Disponible ya!</Button>
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