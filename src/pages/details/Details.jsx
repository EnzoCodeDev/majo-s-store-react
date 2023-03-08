import { Breadcrumb, Image } from 'antd';
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
                            <Image src={product[imgSelect]['img']} alt={'Cover_page'} />
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


                    </div>
                </div>
            </div>
        </div>
    )
}