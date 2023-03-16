import './returnWarranties.scss';
import React from 'react'
export const ReturnWarranties = () => {
    return (
        <div className='container-return-warranties'>
            <div className='return-warranties'>
                <h3>Devoluciones</h3>
                <p>Las devoluciones de dinero podrán tener lugar dentro de los tres (3)  siguientes días de haber recibido la prenda.</p>
                <p>Andrea Forster, podrá negarse si la prenda ha sido usada en condiciones distintas a las recomendadas o propias de su naturaleza o si ha sufrido un deterioro esencial e irreparable.</p>
            </div>
            <div className='return-warranties'>
                <h3>Garantías</h3>
                <p> Plazo máximo 30 días.</p>
                <p>Aplica cambio de prenda únicamente si hay disponibilidad.</p>
                <p>El producto no puede estar usado ni modificado de su estado original. Debe estar en buen estado, limpio y con las etiquetas originales.</p>
                <p>Solo se permite 1 cambio por referencia.</p>
                <p>Los costos de envío serán asumidos entre el cliente y Andrea Forster.</p>
                <br />
                <p>*Cualquier costo o impuesto adicional de ingreso a cada país, debe ser asumido por el cliente.</p>
            </div>
        </div>
    )
}
