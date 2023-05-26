import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

import { IntlProvider, FormattedMessage } from 'react-intl';
import localeEn from './locales/en.json';
import localeEs from './locales/es.json';


const userLocale = navigator.language || navigator.userLanguage;

const messagesMap = {
  en: localeEn,
  es: localeEs,
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <IntlProvider locale={userLocale} messages={messagesMap[userLocale.slice(0, 2)]}>
    <Container fluid>
      <BrowserRouter>
        <h1 style={{ fontFamily: "fantasy"}}>
          <FormattedMessage id="HomeTitle" />
        </h1> 
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
          <FormattedMessage id="ContactInfo" />
        </footer>
      </BrowserRouter>
    </Container>
  </IntlProvider>
);
