import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container fluid>
    <BrowserRouter>
      <h1 style={{ fontFamily: "fantasy"}}>El aroma mágico</h1> 
      <hr/>
      <Row>
        <Col md={12}>
          <Image src="coffe-banner.png" fluid width={"100%"} />
        </Col>
      </Row>
      <hr/>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <br/>
      <footer className='d-flex justify-content-center'>
        Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
      </footer>
    </BrowserRouter>
  </Container>
);
