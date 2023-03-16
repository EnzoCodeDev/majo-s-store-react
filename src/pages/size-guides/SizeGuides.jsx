import './sizeGuides.scss';
import React from 'react';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { Size } from '../../components/size/Size';

export const SizeGuides = () => {
    let navigate = useNavigate();
    return (
        <AnimationPage>
            <div className='sizeguides'>
                <div className='sizeguides-container'>
                    <div className='conatiner-breadcrumb'>
                        <Breadcrumb separator=">" >
                            <Breadcrumb.Item className='cursor-poiner' onClick={() => navigate('/home')}>Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item>Guía de tallas</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='sizeguides-info'>
                        <Size />
                    </div>
                </div>
            </div>
        </AnimationPage>
    )
}