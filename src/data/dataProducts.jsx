import pine1 from '../assets/products/pine/present/pine_1.jpg';
import pine2 from '../assets/products/pine/present/pine_2.jpg';
import pine3 from '../assets/products/pine/present/pine_3.jpg';
import pine4 from '../assets/products/pine/present/pine_4.jpg';
import pine5 from '../assets/products/pine/present/pine_5.jpg';

import azul1 from '../assets/products/azzul/present/azzul_1.jpg';
import azul2 from '../assets/products/azzul/present/azzul_2.jpg';
import azul3 from '../assets/products/azzul/present/azzul_3.jpg';
import azul4 from '../assets/products/azzul/present/azzul_4.jpg';
import azul5 from '../assets/products/azzul/present/azzul_5.jpg';
import azul6 from '../assets/products/azzul/present/azzul_6.jpg';
import azul7 from '../assets/products/azzul/present/azzul_7.jpg';
import azul8 from '../assets/products/azzul/present/azzul_8.jpg';

import alfa1 from '../assets/products/alfa/present/alfa_1.jpg';
import alfa2 from '../assets/products/alfa/present/alfa_2.jpg';
import alfa3 from '../assets/products/alfa/present/alfa_3.jpg';
import alfa5 from '../assets/products/alfa/present/alfa_5.jpg';
import alfa6 from '../assets/products/alfa/present/alfa_6.jpg';


export let dataProducts = {
    ultime: 'pine',
    unavailable: [],
    allCollection: [
        {
            title: 'Conjunto PINE',
            price: '150.000',
            img: pine1,
            redirect: 'pine',
        },
        {
            title: 'Crop Top AZZUL',
            price: '97.000',
            img: azul1,
            redirect: 'azzul',
        },
        {
            title: 'Crop Top ALFA',
            price: '140.000',
            img: alfa1,
            redirect: 'alfa',
        },
    ],
    pine: {
        swiper: {
            title: 'Conjunto PINE',
            redirect: 'pine',
            img: [pine2, pine2],
        },
        detail: {
            title: 'Conjunto PINE',
            price: '150.000',
            img: [pine1, pine3, pine4, pine5],
            description: {
                t1: 'Empoderate con el conjunto PINE🍍',
                t2: 'PINE está inspirado por esos colores que queremos preservar💚',
                t3: '• PINE cuenta con cierres invisibles que permite versatilidad  y ajuste al cuerpo.',
                t4: '• Este conjunto está hecho con fibra de cáscara de piña.',
                t5: '• Falda ajustable a un lado con cierre.',
                t6: '• Es edición limitada.',
                t7: '• Envíos gratis a todo el país \uD83C\uDDE8\uD83C\uDDF4',
            },
            tallas: ['XS', 'S', 'M'],
        }
    },
    azzul: {
        detail: {
            title: 'Crop Top AZZUL',
            price: '97.000',
            img: [azul1, azul2, azul7, azul8, azul5, azul6, azul3, azul4],
            description: {
                t1: 'Empoderate con el Crop Top AZZUL💙',
                t2: 'AZZUL está inspirado por esos colores que queremos preservar.',
                t3: '• AZZUL tiene escote delicado, cuenta con amarre en la parte de arriba y de debajo.',
                t4: '• Este top está hecho con poliéster reciclado.',
                t5: '• El empaque es hecho con materiales reciclados.',
                t6: '• Es edición limitada.',
                t7: '• Envíos gratis a todo el país \uD83C\uDDE8\uD83C\uDDF4',
            },
            tallas: ['XS', 'S', 'M'],
        }
    },
    alfa: {
        detail: {
            title: 'Crop Top ALFA',
            price: '140.000',
            img: [alfa2, alfa5, alfa3, alfa6],
            description: {
                t1: 'Siéntete  segura con el crop top ALFA💛.',
                t2: 'ALFA está inspirado en lo mágico, elegante y exclusivo del municipio Roldanillo, características que comparte con el top del mes enero.',
                t3: '• ALFA  cuenta con escote a un lado y fruncido que le da el toque.',
                t4: '• Este top está hecho de manera sostenible.',
                t5: '• El empaque es hecho con materiales reciclados.',
                t6: '• Esta edición es limitada.',
                t7: '• Envíos gratis a todo el país \uD83C\uDDE8\uD83C\uDDF4',
            },
            tallas: ['XS', 'S', 'M'],
        }
    },
};