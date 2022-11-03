import React from 'react'
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import golden from '../images/golden.png';
import honey from '../images/honey.png';
import stout from '../images/stout.png';
import red from '../images/red.png';
import ipa from '../images/ipa.png';
import irish from '../images/irish.png';

import { FaCartPlus,  FaCartArrowDown} from "react-icons/fa";

const Cerveza = ({cerveza, cervezas, carrito, setCarrito }) => {

    const determinarImagen = (imagen) =>{
        switch (imagen) {
            case "ipa":
                return ipa;
                break;
            case "golden":
                return golden;
                break;  
            case "stout":
                return stout;
                break; 
            case "red":
                return red;
                break;    
            case "irish":
                return irish;
                break; 
            case "honey":
                return honey;
                break;
            default:
                break;
        }
    }

    const seleccionarCerveza = (id) => {
        const uuid = uuidv4();
        const cerveza = cervezas.filter( c => c.id === id)[0];
        cerveza.uuid = uuid; //problema: cuando selecciono el mismo 2 veces, siempre se copia el uuid generado la primera vez, no entiendo!!!...
        //console.log(cerveza.uuid)
        //console.log(carrito)
        setCarrito([...carrito,cerveza]);
    }

    const sacarCerveza = (uuid) => {
        //console.log(uuid)
       console.log(carrito)
        const nuevoCarrito = carrito.filter( car => car.uuid !== uuid); //no funciona me saca todos .... :@
        setCarrito(nuevoCarrito)

    }

  return (
        <li className='tarjeta' key={cerveza.id}>
            {
                cervezas ? <img src={determinarImagen(cerveza.imagen)} alt={cerveza.id} />
                :
                ""
            }
            
            <div className="informacion">
                <p className='titulo'>{cerveza.nombre}</p>
                <p> $ {cerveza.precio}</p>
                <p>{cerveza.descripcion}</p>
            </div>
            {
                cervezas ? <Button 
                                variant="primary" 
                                size="lg"
                                onClick={() => seleccionarCerveza(cerveza.id)}>
                                <FaCartPlus />
                            </Button>
                :   <Button 
                        variant="danger" 
                        size="lg"
                        onClick={() => sacarCerveza(cerveza.uuid)}>
                <FaCartArrowDown />
            </Button>
            }
            
        </li>
  )
}

export default Cerveza