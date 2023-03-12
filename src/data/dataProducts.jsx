
import azul1 from '../assets/products/azzul/swiper/azzul_1.jpg';
import azul2 from '../assets/products/azzul/swiper/azzul_2.jpg';
import azul3 from '../assets/products/azzul/swiper/azzul_3.jpg';
import azul4 from '../assets/products/azzul/swiper/azzul_4.jpg';
import zusu from '../assets/products/azzul/swiper/zusu.jpg';
export let dataProducts = {
    ultime: 'azzul',
    unavailable: ['alfa'],
    allCollection: [
        {
            title: 'ALFA',
            price: '230.000',
            img: zusu,
            redirect: 'azzul',
        },
        {
            title: 'AZZUL',
            price: '230.000',
            img: zusu,
            redirect: 'alfa',
        },
    ],
    alfa: {
        swiper: {
            redirect: 'alfa',
            title: 'Alfa',
            img: [azul1, azul2, azul3, azul4],
        },
        detail: {
            title: 'Alfa',
            price: '230.000',
            img: [azul1, azul2, azul3, azul4],
            description: {
                t1: 'PORTO se inspiro en la ciudad del vino en Portugal, la ciudad de las casitas, de los mil colores y barcos.',
                t2: '- Este pantalón están hecho de forma sostenible con lino y rayon.',
                t3: '- El color se obtiene por sublimación, no utilizamos agua en el proceso.',
                t4: '- El empaque y la etiqueta son hechos de papel reciclado.',
                t5: '- Edición limitada.',
                t6: '- Este pantalón están hecho de forma sostenible con lino y rayon.',
                t7: '- El color se obtiene por sublimación, no utilizamos agua en el proceso.',
                t8: '- El empaque y la etiqueta son hechos de papel reciclado.',
                t9: '- El empaque y la etiqueta son hechos de papel reciclado.',
            },
            tallas: ['S', 'M', 'L'],
        }
    },
    azzul: {
        swiper: {
            redirect: 'azzul',
            title: 'azzul',
            img: [azul1, azul2, azul3, azul4],
        },
        detail: {
            title: 'Azzul',
            price: '230.000',
            img: [azul1, azul2, azul3, azul4],
            description: {
                t1: 'PORTO se inspiro en la ciudad del vino en Portugal, la ciudad de las casitas, de los mil colores y barcos.',
                t2: '- Este pantalón están hecho de forma sostenible con lino y rayon.',
                t3: '- El color se obtiene por sublimación, no utilizamos agua en el proceso.',
                t4: '- El empaque y la etiqueta son hechos de papel reciclado.',
                t5: '- Edición limitada.',
                t6: '- Este pantalón están hecho de forma sostenible con lino y rayon.',
                t7: '- El color se obtiene por sublimación, no utilizamos agua en el proceso.',
                t8: '- El empaque y la etiqueta son hechos de papel reciclado.',
                t9: '- El empaque y la etiqueta son hechos de papel reciclado.',
            },
            tallas: ['S', 'M', 'L'],
        }
    }
};