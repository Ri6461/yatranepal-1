import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;

        // ✅ Save token in cookie
        Cookies.set("token", token, { expires: 1 }); // expires in 1 day

        setError("");
        setSuccess("Login successful! Redirecting...");

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (err) {
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Server error. Please try again later.");
      }
      setSuccess("");
    }
  };

  return (
    <section
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <div className="p-4 bg-dark rounded shadow-lg">
              <h2 className="text-center mb-4">Login</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="warning"
                  className="w-100 fw-bold"
                >
                  Submit
                </Button>
              </Form>

              <p className="mt-3 text-center">
                Not registered?{" "}
                <a href="/register" style={{ color: "#ffd700" }}>
                  Register Now
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
