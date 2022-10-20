import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
// import banner from "../../assets/banner.png"

import { Button } from "../Button";

import {
  Container,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  Input,
  ImgLogo,
  UserPicture,
} from "./styles";

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/"><ImgLogo src={logo} alt="Logo da DIO" /></Link>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>

            ) : null}

        </Row>
        <Row>
          {autenticado ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/63865025?v=4" />
            </>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Link to="/login"><Button title="Entrar" /></Link>
              <Button title="Cadastrar" />
            </>

          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
