import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function LoginForm() {
  const [authenticated, setAuthenticated] = useState(undefined);

  function getErrorMessage() {
    if (authenticated === false) {
      return (
        <p style={{ color: "red" }}>
          Error de autenticación. Revise sus credenciales
        </p>
      );
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: e.target.username.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          setAuthenticated(false);
        } else if (data.status === "success") {
          setAuthenticated(true);
          window.location.href = "/home";
        }
      });
  }

  return (
    <Container>
      <h3>Inicio de sesión</h3>
      <Card className="d-flex justify-content-center red-bg">
        <Card.Body className="mx-auto" style={{ width: "75%" }}>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="username">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control className="text-bg" type="text" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control className="text-bg" type="password" />
            </Form.Group>
            <br />
            <Row className="d-flex justify-content-center">
              <Col md={6} className="d-flex justify-content-center">
                <Button variant="success"style={{ color: "black" }} type="submit" className="w-100">
                  Iniciar sesión
                </Button>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                <Button variant="danger" style={{ color: "black" }} type="reset" className="w-100">
                  Cancelar
                </Button>
              </Col>
            </Row>
            <br />
            <div className="d-flex justify-content-center">
              {getErrorMessage()}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginForm;
