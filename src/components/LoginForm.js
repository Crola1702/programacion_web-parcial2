import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function LoginForm() {
  const [authenticated, setAuthenticated] = useState(undefined);

  function getErrorMessage() {
    if (authenticated === false) {
      return (
        <p style={{ color: "red" }}>
          <FormattedMessage id="LoginError" />
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
      <h3>
        <FormattedMessage id="LoginTitle" />
      </h3>
      <Card className="d-flex justify-content-center red-bg">
        <Card.Body className="mx-auto" style={{ width: "75%" }}>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="username">
              <Form.Label>
                <FormattedMessage id="Username" />
              </Form.Label>
              <Form.Control className="text-bg" type="text" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>
                <FormattedMessage id="Password" />
              </Form.Label>
              <Form.Control className="text-bg" type="password" />
            </Form.Group>
            <br />
            <Row className="d-flex justify-content-center">
              <Col md={6} className="d-flex justify-content-center">
                <Button
                  variant="success"
                  style={{ color: "black" }}
                  type="submit"
                  className="w-100"
                >
                  <FormattedMessage id="Login" />
                </Button>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                <Button
                  variant="danger"
                  style={{ color: "black" }}
                  type="reset"
                  className="w-100"
                >
                  <FormattedMessage id="Cancel" />
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
