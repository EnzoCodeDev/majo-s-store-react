import './sizeGuides.scss';
import React from 'react';
import { Breadcrumb } from 'antd';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { Size } from '../../components/size/Size';

export const SizeGuides = () => {
    let breadcrumb = [
        {
            breadcrumbName: 'Inicio',
        },
        {
            breadcrumbName: 'Guía de tallas',
        },
    ];
    return (
        <AnimationPage>
            <div className='sizeguides'>
                <div className='sizeguides-container'>
                    <div className='conatiner-breadcrumb'>
                        <Breadcrumb separator=">" routes={breadcrumb} />
                    </div>
                    <div className='sizeguides-info'>
                        <Size />
                    </div>
                </div>
            </div>
        </AnimationPage>
    )
}