import React, {useState, useEffect} from 'react'
import CardProduct from '../components/CardProduct';
import { useParams } from 'react-router-dom';


export default function Categoria() {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`http://localhost:5000/product/${categoria}`);
        const data = await response.json();
        console.log(data);
        setProductos(data);

      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData();
  },[categoria])


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-11'>
            <div className='container'>
              <div className="row row-cols-1 row-cols-md-4 g-4 m-5">
                {productos.map((item) => (
                    <CardProduct
                      key={item.id}
                      titulo={item.titulo}
                      precio={item.precio}
                      descripcion={item.descripcion} 
                      categoria={item.categoria}
                      ruta={item.ruta}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
