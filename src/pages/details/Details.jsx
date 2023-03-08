import { Breadcrumb } from 'antd';
import React from 'react';
import './details.scss';
export const Details = () => {
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
    }];
    return (
        <div className='details'>
            <div className='container-detail'>
                <div className='conatiner-breadcrumb'>
                    <Breadcrumb separator=">" routes={breadcrumb} />
                </div>
            </div>
        </div>
    )
}