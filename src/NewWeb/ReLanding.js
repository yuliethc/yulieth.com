import React from "react";
import Header from "./components/Header";
import StyledButton from "./components/StyledButton";
import ImageHeader from "./img/fondototal1.png";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

const PrincipalContainer = styled.div`
  display: flex;
  width: 100vw;
`;

const HomeContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const PrincipalImage = styled.img`
  width: 100%;
  height: 90%;
  position: absolute;
  pointer-events: none;
`;

const ReLanding = () => {
  return (
    <PrincipalContainer>
      <HomeContainer>
        <Header></Header>
        <PrincipalImage src={ImageHeader}></PrincipalImage>
        <Container className="h-100 w-100 m-0 p-0">
          <Row className="h-100 w-100 m-0 p-0">
            <Col xs={6} md={6} className="h-100 w-100 m-0 p-0" >
              left
            </Col>
            <Col xs={6} md={6} className="h-100 w-100 m-0 p-0">
              right
            </Col>
          </Row>
        </Container>
      </HomeContainer>
      {/* <StyledButton Title="Contact me"></StyledButton> */}
    </PrincipalContainer>
  );
};

export default ReLanding;
