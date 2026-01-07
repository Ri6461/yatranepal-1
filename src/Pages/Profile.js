import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "../Components/ExpComp";

const Profile = ({ profile, isLoggedIn }) => {
  console.log(profile)

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn}/>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="shadow-lg">
              <Card.Body className="text-center">
                <Card.Title className="mb-3">Profile</Card.Title>
                <h4 className="fw-bold">{profile.name}</h4>
                {/* If you want to show email later, uncomment below */}
                <p className="text-muted">{profile.email}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
