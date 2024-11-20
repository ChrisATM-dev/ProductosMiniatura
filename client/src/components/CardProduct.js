import React from 'react'


export default function CardProduct({titulo, precio, descripcion, categoria, ruta}) {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={ruta} className="card-img-top" alt={titulo} />
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <div>
              <ul className='list-unstyled text-start'>
                <li><strong>precio: </strong>{precio}</li>
                <li><strong>Categoria: </strong>{categoria}</li>
                <li><strong>Cantidad: </strong> Un par</li>
                <li><p className="card-text">{descripcion}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
