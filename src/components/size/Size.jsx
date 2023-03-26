import './size.scss';
import React from 'react'
import { Table } from 'antd';
export const Size = () => {
    const columns = [
        {
            title: 'Medida',
            dataIndex: 'medida',
        },
        {
            title: 'XS',
            dataIndex: 'xs',
        },
        {
            title: 'S',
            dataIndex: 's',
        },
        {
            title: 'M',
            dataIndex: 'm',
        },
        {
            title: 'L',
            dataIndex: 'l',
        },
    ];

    const dataBody = [
        {
            key: '1',
            medida: 'Cintura',
            xs: '85 cm',
            s: '90 cm',
            m: '95 cm',
            l: '105 cm',
        },
        {
            key: '2',
            medida: 'Cadera',
            xs: '65 cm',
            s: '75 cm',
            m: '80 cm',
            l: '85 cm',
        },
        {
            key: '3',
            medida: 'Largo',
            xs: '95 cm',
            s: '100 cm',
            m: '105 cm',
            l: '110 cm',
        },
    ];

    // const data = [
    //     {
    //         key: '1',
    //         medida: 'Cintura',
    //         xs: '85 cm',
    //         s: '90 cm',
    //         m: '95 cm',
    //         l: '105 cm',
    //     },
    //     {
    //         key: '2',
    //         medida: 'Cadera',
    //         xs: '65 cm',
    //         s: '75 cm',
    //         m: '80 cm',
    //         l: '85 cm',
    //     },
    //     {
    //         key: '3',
    //         medida: 'Largo',
    //         xs: '95 cm',
    //         s: '100 cm',
    //         m: '105 cm',
    //         l: '110 cm',
    //     },
    // ];
    return (
        <React.Fragment>
            <div className='container-table'>
                <p>Prendas superiores</p>
                <Table size={'small'} pagination={false} columns={columns} dataSource={dataBody} bordered />
            </div>
            {/* <div className='container-table'>
                <p>Prendas inferiores</p>
                <Table size={'small'} pagination={false} columns={columns} dataSource={data} bordered />
            </div> */}
        </React.Fragment>
    )
}