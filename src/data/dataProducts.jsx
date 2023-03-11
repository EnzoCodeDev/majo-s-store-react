
import azul1 from '../assets/products/azzul/swiper/azzul_1.jpg';
import azul2 from '../assets/products/azzul/swiper/azzul_2.jpg';
import azul3 from '../assets/products/azzul/swiper/azzul_3.jpg';
import azul4 from '../assets/products/azzul/swiper/azzul_4.jpg';
export let dataProducts = {
    alfa: {
        swiper: {
            title: 'Alfa',
            img: [],
        },
        detail: {

        }
    },
    azzul: {
        swiper: {
            redirect: 'azzul',
            title: 'azzul',
            img: [azul1, azul2, azul3, azul4],
        },
        detail: {
            title: 'azzul',
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