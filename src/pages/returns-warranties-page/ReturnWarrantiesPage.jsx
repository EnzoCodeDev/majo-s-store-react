import './returnWarrantiesPage.scss';
import React from 'react';
import { Breadcrumb } from 'antd';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { ReturnWarranties } from '../../components/returns-warranties/ReturnWarranties';

export const ReturnWarrantiesPage = () => {
    let breadcrumb = [
        {
            breadcrumbName: 'Inicio',
        },
        {
            breadcrumbName: 'Enviós y devolucciones',
        },
    ];
    return (
        <AnimationPage>
            <div className='return-warranties-page'>
                <div className='return-warranties-page-container'>
                    <div className='conatiner-breadcrumb'>
                        <Breadcrumb separator=">" routes={breadcrumb} />
                    </div>
                    <div className='return-warranties-page-info'>
                        <ReturnWarranties />
                    </div>
                </div>
            </div>
        </AnimationPage>
    )
}