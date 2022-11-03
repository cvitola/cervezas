import React , {useEffect, useState} from 'react'
import Cerveza from '../components/Cerveza';
import { v4 as uuidv4 } from 'uuid';

const Carro = ({carrito,setCarrito}) => {
  
  useEffect( () => {
    actualizarImporte(carrito);
    agregarUuid(carrito);
    console.log(carrito)
  },[carrito])

  const [importe, setImporte] = useState(0);
    
  const actualizarImporte = (carrito) => {
        let sum = carrito.reduce( function(sum,item){
            return sum+item.precio;
        },0)
        setImporte(sum)
    }

    //Este metodo no funciona, pega siempre el mismo uuid.
    const agregarUuid = (carrito) =>{
      carrito.forEach( item => {
        let uuid = uuidv4();
        console.log(uuid)
        if(!item.uuid){
          item.uuid = uuid
        }
      });
    }

  return (
    <article>
        <h2>MI CARRO</h2>
        <h3>Total: $ {importe}</h3>
        {
            carrito.map( cer => <Cerveza 
                                    cerveza={cer}
                                    carrito={carrito}
                                    setCarrito={setCarrito}
                                    importe={importe}
                                    setImporte={setImporte}
                                 />)
        }
    </article>
  )
}

export default Carro