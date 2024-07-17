import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'


function ArticuloDetalle() {
    // const params = useParams([]);
    const { articuloId } = useParams();
    
    const [articulo, setArticulo] = useState({
        id: '',
        codigo: '',
        nombre: '',
        descripcion: '',
        costo: '',
        coeficiente: '',
        stock: '',
        urlfoto: '',
      });

    useEffect(() => {
    fetch(`https://665666719f970b3b36c542e6.mockapi.io/articulos/${articuloId}`)
    .then((res) => res.json())
    .then((data)=> setArticulo(data) );
        }, [articuloId]);
    
  return (
    
    <div>
        <p style={{fontStyle:'italic'}}> Detalle de {articulo.nombre}</p>    
        <p style={{fontStyle:'italic', color:'brown'}} > {articulo.descripcion} </p>    
        <p style={{color:'green', fontSize:'1.3rem'}}> $ {articulo.costo*articulo.coeficiente} </p>
        <button> Comprar </button>
        
    </div>
  )
}

export default ArticuloDetalle