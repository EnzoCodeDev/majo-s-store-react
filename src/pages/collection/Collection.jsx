import './collection.scss';
import React from 'react';
import { Breadcrumb } from 'antd';
import { AllCollection } from '../../components/all-collection/AllCollection'
import { AnimationPage } from '../../components/animation/AnimationPage';

export const Collection = () => {
    let breadcrumb = [
        {
            breadcrumbName: 'Inicio',
        },
        {
            breadcrumbName: 'Colección',
        },
    ];
    return (
        <AnimationPage>
            <div className='all-collection'>
                <div className='container-collection'>
                    <div className='conatiner-breadcrumb'>
                        <Breadcrumb separator=">" routes={breadcrumb} />
                    </div>
                    <div className='container-all-collection-details'>
                        <AllCollection />
                    </div>
                </div>
            </div>
        </AnimationPage>
    )
}