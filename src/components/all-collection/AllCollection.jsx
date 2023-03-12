import React from 'react';
import './allCollection.scss';
import { Card, Badge } from 'antd';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { dataProducts } from '../../data/dataProducts';

export const AllCollection = () => {
    let navigate = useNavigate();
    const { Meta } = Card;
    let dataAllCollection = dataProducts['allCollection'];
    return (
        <div className='container-all-component'>
            {dataAllCollection.map((item, index) => (
                <div className='container-card' onClick={() => navigate(`/detail/${item['redirect']}`)}>
                    <Badge.Ribbon key={index}
                        style={{
                            visibility: dataProducts['ultime'] === item['redirect'] ? 'visible' : (dataProducts['unavailable'].includes(item['redirect']) ? 'visible' : 'hidden')
                        }}
                        text={dataProducts['unavailable'].includes(item['redirect']) ? "Agotado" : 'Nuevo'}
                        color={dataProducts['unavailable'].includes(item['redirect']) ? "#a39a8e" : 'green'}
                    >
                        <motion.div
                            className="box"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 1.07 }}
                            transition={{ type: "spring", stiffness: 200, damping: 17 }}
                        >
                            <Card
                                hoverable
                                style={{ width: '100%' }}
                                cover={<img alt="example" style={{ maxHeight: '400px', objectFit: 'cover' }} src={item['img']} />}
                            >
                                <Meta className='container-body' title={item['title']} description={`$${item['price']}`} />
                            </Card>
                        </motion.div>
                    </Badge.Ribbon>
                </div>
            ))}
        </div>
    )
}