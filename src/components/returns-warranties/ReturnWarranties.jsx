import './returnWarranties.scss';
import React from 'react'
export const ReturnWarranties = () => {
    return (
        <div className='container-return-warranties'>
            <div className='return-warranties'>
                <h3>Devoluciones</h3>
                <p>Las devoluciones de dinero podrán tener lugar dentro de los tres (3) siguientes días de haber recibido la prenda.</p>
                <p>MAJO'S, podrá negarse si la prenda ha sido usada en condiciones distintas a las recomendadas o propias de su naturaleza o si ha sufrido un deterioro esencial e irreparable.</p>
            </div>
            <div className='return-warranties'>
                <h3>Garantías</h3>
                <p>En MAJO'S creamos prendas con excelentes estándares de calidad, por lo tanto, son totalmente garantizadas. Las clientas deben leer muy bien las instrucciones de uso, lavado y cuidado.</p>
                <p>Para hacer un cambio tienes un plazo máximo de 30 días, aplica cambio de prenda únicamente si hay disponibilidad.</p>
                <p>El producto no puede estar usado ni modificado de su estado original. Debe estar en buen estado, limpio y con las etiquetas originales.</p>
            </div>
        </div>
    )
}
