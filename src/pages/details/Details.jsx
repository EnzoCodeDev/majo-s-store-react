import './details.scss';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Image, Badge, Button, Result, Tabs } from 'antd';
import { WhatsAppOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { dataProducts } from '../../data/dataProducts';
import { Size } from '../../components/size/Size';
import { ReturnWarranties } from '../../components/returns-warranties/ReturnWarranties';
export const Details = () => {
    let navigate = useNavigate();
    let { product } = useParams();
    const [imgSelect, setImgSelect] = useState(0);
    const [imgSelect2, setImgSelect2] = useState(1);
    const [productData, setProductData] = useState({
        img: [],
        tallas: [],
        description: {},
    });
    useEffect(() => {
        if (product && dataProducts[product]) {
            setProductData(dataProducts[product]['detail']);
        } else {
            setProductData(undefined);
        }
    }, [product]);

    const itemsTab = [
        {
            key: '1',
            label: `GUÍA DE TALLAS`,
            children: <Size />,
        },
        {
            key: '2',
            label: `DEVOLUCIONES Y GARATÍAS`,
            children: <ReturnWarranties />,
        }
    ];

    return (
        <AnimationPage>
            {productData ? (
                <div className='details'>
                    <div className='container-detail'>
                        <div className='conatiner-breadcrumb'>
                            <Breadcrumb separator=">" >
                                <Breadcrumb.Item className='cursor-poiner' onClick={() => navigate('/home')}>Inicio</Breadcrumb.Item>
                                <Breadcrumb.Item>Detalle de producto</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className='container-details-products'>
                            <div className='container-img'>
                                <div className='img-selected'>
                                    <Badge.Ribbon
                                        style={{
                                            visibility: dataProducts['ultime'] === product ? 'visible' : (dataProducts['unavailable'].includes(product) ? 'visible' : 'hidden')
                                        }}
                                        text={dataProducts['unavailable'].includes(product) ? "Agotado" : 'Nuevo'}
                                        color={dataProducts['unavailable'].includes(product) ? "#a39a8e" : 'green'}>
                                        {productData['img'][imgSelect] && (
                                            <Image src={productData['img'][imgSelect]} alt={'Cover_page'} />
                                        )}
                                    </Badge.Ribbon>
                                </div>
                                <div className='container-img-not-selected'>
                                    {productData['img'].map((item, index) => (
                                        <div key={index} className='img-not-selected'>
                                            <Image onClick={(e) => {
                                                if (imgSelect === index) {
                                                    setImgSelect(index);
                                                    return;
                                                }
                                                if (imgSelect2 === index) {
                                                    setImgSelect(imgSelect2);
                                                    setImgSelect2(imgSelect);
                                                    return;
                                                }
                                                setImgSelect(index);
                                                setImgSelect2(imgSelect);
                                            }} src={item} alt={'Cover_page'} />
                                        </div>
                                    ))}
                                </div>
                                <div className='container-img-movil'>
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
                                            {productData['img'].map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="container">
                                                        <div className="container-header">
                                                            <img className="container-img-header" src={item} alt="Cover_page" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className='container-description'>
                                <h1>{productData['title']}</h1>
                                <p className='price-text'>$ {productData['price']}</p>
                                <div className='description-product'>
                                    <p>{productData['description']['t1']}</p>
                                    <p>{productData['description']['t2']}</p>
                                    <p>{productData['description']['t3']}</p>
                                    <p>{productData['description']['t4']}</p>
                                    <p>{productData['description']['t5']}</p>
                                    <p>{productData['description']['t6']}</p>
                                    <p>{productData['description']['t7']}</p>
                                </div>
                                <div className='container-tallas'>
                                    <p>Tallas disponibles:</p>
                                    <div className='container-botoom'>
                                        {productData['tallas'].map((item, index) => (
                                            <Button key={index} className='buttom' shape="circle" >{item}</Button>
                                        ))}
                                    </div>
                                </div>
                                <div className='container-bottom-info'>
                                    <Link to="https://wa.me/message/VRYESG22ZYGPB1" target="_blank"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            window.open("https://wa.me/message/VRYESG22ZYGPB1")
                                        }}
                                    >
                                        <Button icon={<WhatsAppOutlined />} className='whatsapp' type="primary"> Comprar </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='tap-guies'>
                            <Tabs centered={true} tabPosition={'top'} defaultActiveKey="1" items={itemsTab} />
                        </div>
                    </div>
                </div>
            ) : (
                <Result
                    status="404"
                    title="404"
                    subTitle="Lo sentimos, al parecer el producto no existe."
                    extra={<Button onClick={() => navigate(`/`)} type="primary">Volver al inicio</Button>}
                />
            )}
        </AnimationPage>
    )
}