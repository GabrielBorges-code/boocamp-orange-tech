import React from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { MdEmail, MdLock } from 'react-icons/md';

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

export default function Login() {
  
  const navigate = useNavigate();

  const handleClickSignin = () => {
    navigate("/feed")
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas desejadas
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça o seu cadastro</TitleLogin>
            <SubTitleLogin>Faça o seu login e make the change._</SubTitleLogin>
            <form>
              <Input placeholder="E-mail" type="email" leftIcon={<MdEmail/>}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              {/* type="button" vai servir para evitar de fazer o subbmit  */}
              <Button title="Entrar" variant="secondary" onClick={handleClickSignin} type="button" /> 
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}

// export { Login };
