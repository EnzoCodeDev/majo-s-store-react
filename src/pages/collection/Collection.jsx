import './collection.scss';
import React from 'react';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AllCollection } from '../../components/all-collection/AllCollection'
import { AnimationPage } from '../../components/animation/AnimationPage';

export const Collection = () => {
    let navigate = useNavigate();
    return (
        <AnimationPage>
            <div className='all-collection'>
                <div className='container-collection'>
                    <div className='conatiner-breadcrumb'>
                        <Breadcrumb separator=">" >
                            <Breadcrumb.Item className='cursor-poiner' onClick={() => navigate('/home')}>Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item>Colección</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='container-all-collection-details'>
                        <AllCollection />
                    </div>
                </div>
            </div>
        </AnimationPage>
    )
}