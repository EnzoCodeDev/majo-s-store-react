import { Breadcrumb, Image, Badge, Button } from 'antd';
import React, { useState } from 'react';
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
    },
    {
        title: 'Hola mundo',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        img: `/products/${productActual}/swiper/${productActual}_3.jpg`,
        url: 'https://github.com/sergioDavidCano',
    }
    ];
    return (
        <div className='details'>
            <div className='container-detail'>
                <div className='conatiner-breadcrumb'>
                    <Breadcrumb separator=">" routes={breadcrumb} />
                </div>
                <div className='container-details-products'>
                    <div className='container-img'>
                        <div className='img-selected'>
                            <Badge.Ribbon text="Nuevo" color="green">
                                <Image src={product[imgSelect]['img']} alt={'Cover_page'} />
                            </Badge.Ribbon>
                        </div>
                        <div className='container-img-not-selected'>
                            {product.map((item, index) => (
                                <div key={index} className='img-not-selected'>
                                    <Image onClick={(e) => setImgSelect(index)} src={item['img']} alt={'Cover_page'} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='container-description'>
                        <h1>Title del producto</h1>
                        <p className='price-text'>$230.300</p>
                        <div className='description-product'>
                            <p>PORTO se inspiro en la ciudad del vino en Portugal, la ciudad de las casitas, de los mil colores y barcos.</p>
                            <p>- Este pantalón están hecho de forma sostenible con lino y rayon.</p>
                            <p>- El color se obtiene por sublimación, no utilizamos agua en el proceso.</p>
                            <p>- El empaque y la etiqueta son hechos de papel reciclado.</p>
                            <p>- Edición limitada.</p>
                            <p>- Este pantalón están hecho de forma sostenible con lino y rayon.</p>
                            <p>- El color se obtiene por sublimación, no utilizamos agua en el proceso.</p>
                            <p>- El empaque y la etiqueta son hechos de papel reciclado.</p>
                            <p> El color fue elegido pensando en los edificios que inundan la ciudad, por segunda vez tenemos un pantalón.</p>
                        </div>
                        <div className='container-tallas'>
                            <p>Tallas:</p>
                            <div className='container-botoom'>
                                <Button onClick={(e) => window.location.replace('https://wa.me/message/VRYESG22ZYGPB1')} className='buttom' shape="circle" >XS</Button>
                                <Button className='buttom' shape="circle" >S</Button>
                                <Button className='buttom' shape="circle" >M</Button>
                                <Button className='buttom' shape="circle" >L</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}