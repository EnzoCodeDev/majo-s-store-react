import { Breadcrumb, Image, Badge, Button } from 'antd';
import React, { useState } from 'react';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { dataProducts } from '../../data/dataProducts';
import './details.scss';
export const Details = () => {
    const [imgSelect, setImgSelect] = useState(0);
    let breadcrumb = [
        {
            breadcrumbName: 'Inicio',
        },
        {
            breadcrumbName: 'Detalle de producto',
        },
    ];
    let productActual = dataProducts['azzul']['detail'];
    return (
        <AnimationPage>
            <div className='details'>
                <div className='container-detail'>
                    <div className='conatiner-breadcrumb'>
                        <Breadcrumb separator=">" routes={breadcrumb} />
                    </div>
                    <div className='container-details-products'>
                        <div className='container-img'>
                            <div className='img-selected'>
                                <Badge.Ribbon text="Nuevo" color="green">
                                    <Image src={productActual['img'][imgSelect]} alt={'Cover_page'} />
                                </Badge.Ribbon>
                            </div>
                            <div className='container-img-not-selected'>
                                {productActual['img'].map((item, index) => (
                                    <div key={index} className='img-not-selected'>
                                        <Image onClick={(e) => setImgSelect(index)} src={item} alt={'Cover_page'} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='container-description'>
                            <h1>{productActual['title']}</h1>
                            <p className='price-text'>$ {productActual['price']}</p>
                            <div className='description-product'>
                                <p>{productActual['description']['t1']}</p>
                                <p>{productActual['description']['t2']}</p>
                                <p>{productActual['description']['t3']}</p>
                                <p>{productActual['description']['t4']}</p>
                                <p>{productActual['description']['t5']}</p>
                                <p>{productActual['description']['t6']}</p>
                                <p>{productActual['description']['t7']}</p>
                                <p>{productActual['description']['t8']}</p>
                                <p>{productActual['description']['t9']}</p>
                            </div>
                            <div className='container-tallas'>
                                <p>Tallas disponibles:</p>
                                <div className='container-botoom'>
                                    {productActual['tallas'].map((item, index) => (
                                        <Button key={index} className='buttom' shape="circle" >{item}</Button>
                                    ))}
                                    {/* <Button onClick={(e) => window.location.replace('https://wa.me/message/VRYESG22ZYGPB1')} className='buttom' shape="circle" >XS</Button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AnimationPage>
    )
}