import './details.scss';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Image, Badge, Button, Result } from 'antd';
import { WhatsAppOutlined } from "@ant-design/icons";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { dataProducts } from '../../data/dataProducts';
export const Details = () => {
    let navigate = useNavigate();
    let { product } = useParams();
    const [imgSelect, setImgSelect] = useState(0);
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
    let breadcrumb = [
        {
            breadcrumbName: 'Inicio',
        },
        {
            breadcrumbName: 'Detalle de producto',
        },
    ];

    return (
        <AnimationPage>
            {productData ? (
                <div className='details'>
                    <div className='container-detail'>
                        <div className='conatiner-breadcrumb'>
                            <Breadcrumb separator=">" routes={breadcrumb} />
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
                                            <Image onClick={(e) => setImgSelect(index)} src={item} alt={'Cover_page'} />
                                        </div>
                                    ))}
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
                                    <p>{productData['description']['t8']}</p>
                                    <p>{productData['description']['t9']}</p>
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
                                        <Button icon={<WhatsAppOutlined />} className='whatsapp' type="primary"> WhatsApp </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Result
                    status="404"
                    title="404"
                    subTitle="Lo sentimos, al parecer el producto no existe."
                    extra={<Button onClick={() => navigate(`/home`)} type="primary">Volver al inicio</Button>}
                />
            )}
        </AnimationPage>
    )
}