import React from 'react';
import './allCollection.scss';
import { Card } from 'antd';
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
                <div key={index} className='container-card' onClick={() => navigate(`/detail/${item['redirect']}`)}>
                    <motion.div
                        className="box"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.1 }}
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
                </div>
            ))}
        </div>
    )
}