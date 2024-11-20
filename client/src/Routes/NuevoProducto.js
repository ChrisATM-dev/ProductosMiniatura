import React, { useState } from 'react'

export default function NuevoProducto() {
  // Estado para almacenar los datos del formulario
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [ruta, setRuta] = useState('');


  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'titulo') setTitulo(value);
    if (name === 'descripcion') setDescripcion(value);
    if (name === 'precio') setPrecio(value);
    if (name === 'categoria') setCategoria(value);
    if (name === 'ruta') {
      setRuta(value);
    }};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const producto = {
      titulo,
      descripcion,
      precio: parseInt(precio),
      categoria,
      ruta
    }};

  return (
    <div className='container'>
      <div className='row'>
      <div className='col-6'>
          <h3>Formulario de Nuevo Producto</h3>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='titulo' className='form-label'>Título</label>
              <input type='text' className='form-control' id='titulo' name='titulo' value={titulo} onChange={handleChange} required/>
            </div>
            <div className='mb-3'>
              <label htmlFor='descripcion' className='form-label'>Descripción</label>
              <textarea className='form-control' id='descripcion' name='descripcion' value={descripcion} onChange={handleChange} required></textarea>
            </div>
            <div className='mb-3'>
              <label htmlFor='precio' className='form-label'>Precio</label>
              <input type='number' className='form-control' id='precio' name='precio' value={precio} onChange={handleChange} required/>
            </div>
            <div className='mb-3'>
              <label htmlFor='categoria' className='form-label'>Categoría</label>
              <input type='text' className='form-control' id='categoria' name='categoria' value={categoria} onChange={handleChange} required/>
            </div>
            <div className='mb-3'>
              <label htmlFor='ruta' className='form-label'>Imagen</label>
              <input type='file' className='form-control' id='ruta' name='ruta' onChange={handleChange} required/>
            </div>
            <button type='submit' className='btn btn-primary'>Agregar Producto</button>
          </form>
        </div>
        <div className='col-6'> vista previa</div>
      </div>
    </div>
  )
}
