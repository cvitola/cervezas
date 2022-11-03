import React from 'react'
import { Nav } from 'react-bootstrap';
import  logo  from '../images/logo.jpg';
const Header = () => {
  return (
    <header className='header'>
        <img className="logo" src={logo} alt="Holis"/>
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item >
            <Nav.Link href="/home">Bienvenidos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Un Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Otro Link</Nav.Link>
        </Nav.Item>
        </Nav>
    </header>
  )
}

export default Header