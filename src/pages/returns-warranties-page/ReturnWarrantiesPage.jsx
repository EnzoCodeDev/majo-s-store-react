import './returnWarrantiesPage.scss';
import React from 'react';
import { Breadcrumb } from 'antd';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { ReturnWarranties } from '../../components/returns-warranties/ReturnWarranties';
import { useNavigate } from 'react-router-dom';

export const ReturnWarrantiesPage = () => {
    let navigate = useNavigate();
    return (
        <AnimationPage>
            <div className='return-warranties-page'>
                <div className='return-warranties-page-container'>
                    <div className='conatiner-breadcrumb'>
                        <Breadcrumb separator=">" >
                            <Breadcrumb.Item className='cursor-poiner' onClick={() => navigate('/home')}>Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item>Enviós y devolucciones</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='return-warranties-page-info'>
                        <ReturnWarranties />
                    </div>
                </div>
            </div>
        </AnimationPage>
    )
}