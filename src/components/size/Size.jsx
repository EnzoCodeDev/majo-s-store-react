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
            medida: 'Busto',
            xs: '66 cm',
            s: '70 cm',
            m: '74 cm',
            l: '80 cm',
        },
        {
            key: '2',
            medida: 'Cintura',
            xs: '66 cm',
            s: '70 cm',
            m: '74 cm',
            l: '80 cm',
        },
        {
            key: '3',
            medida: 'Largo',
            xs: '66 cm',
            s: '70 cm',
            m: '74 cm',
            l: '80 cm',
        },
    ];

    const data = [
        {
            key: '1',
            medida: 'Cintura',
            xs: '66 cm',
            s: '70 cm',
            m: '74 cm',
            l: '80 cm',
        },
        {
            key: '2',
            medida: 'Cadera',
            xs: '66 cm',
            s: '70 cm',
            m: '74 cm',
            l: '80 cm',
        },
        {
            key: '3',
            medida: 'Largo',
            xs: '66 cm',
            s: '70 cm',
            m: '74 cm',
            l: '80 cm',
        },
    ];
    return (
        <React.Fragment>
            <div className='container-table'>
                <p>Medida 1</p>
                <Table size={'small'} pagination={false} columns={columns} dataSource={dataBody} bordered />
            </div>
            <div className='container-table'>
                <p>Medida 1</p>
                <Table size={'small'} pagination={false} columns={columns} dataSource={data} bordered />
            </div>
        </React.Fragment>
    )
}