import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Panel from './components/Panel';
import Carro from './components/Carro';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

const [carrito, setCarrito] = useState([]);

  return (
    <div className="App">
      <Header />
      <Container className="fondo">
        <Row>
          <Col>
            <Panel 
              carrito={carrito} 
              setCarrito={setCarrito}
            />
          </Col>
          <Col>
            <Carro 
              carrito={carrito} 
              setCarrito={setCarrito}
            />
          </Col>
        </Row>
      </Container>
      

      <Footer />
    </div>
  );
}

export default App;
