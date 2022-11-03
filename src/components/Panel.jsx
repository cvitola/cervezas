import React ,{ useState } from 'react'
import Cerveza from '../components/Cerveza';

const Panel = ({carrito, setCarrito}) => {

    const [importe, setImporte] = useState(0);
    const [cervezas, setCervezas] = useState([
        {
            "id": 1,
            "nombre": "HONEY",
            "precio": 280,
            "descripcion": "ver q poner",
            "imagen": "honey"
        },
        {
            "id": 2,
            "nombre": "GOLDEN",
            "precio": 290,
            "descripcion": "ver q poner",
            "imagen": "golden"
        },
        {
            "id": 3,
            "nombre": "STOUT",
            "precio": 250,
            "descripcion": "ver q poner",
            "imagen": "stout"
        },
        {
            "id": 4,
            "nombre": "RED IPA",
            "precio": 250,
            "descripcion": "ver q poner",
            "imagen": "red"
        },
        {
            "id": 5,
            "nombre": "IRISH",
            "precio": 250,
            "descripcion": "ver q poner",
            "imagen": "irish"
        },
        {
            "id": 6,
            "nombre": "IPA",
            "precio": 250,
            "descripcion": "ver q poner",
            "imagen": "ipa"
        }
    ])

    console.log("Carrito:" + carrito)

  return (
    <>
    <h2>Nuestras cervezas</h2>
      <ul className='contenedor'>
      
      {
        cervezas.map( cer => <Cerveza 
                                cerveza={cer}
                                cervezas={cervezas}
                                carrito={carrito}
                                setCarrito={setCarrito}
                                importe={importe}
                                setImporte={setImporte}
                                key={cer.uuid}
                             />)
      }
      </ul>
    </>

  )
}

export default Panel