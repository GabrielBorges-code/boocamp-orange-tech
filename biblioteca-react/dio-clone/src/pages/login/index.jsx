import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MdEmail, MdLock } from "react-icons/md";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

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

const schema = yup
  .object({
    email: yup.string().email("e-mail inválido").required("email errado"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("senha ruim"),
  })
  .required();

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email${formData.email}&senha${formData.password}`
      );

      // console.log(data.length)

      if (data.length !== 0) {
        navigate("/feed");
      } else {
        alert("Email ou senha inválido");
      }
    } catch (error) {
      alert("Houve um erro, tente novamente");
    }
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              {/* type="button" vai servir para evitar de fazer o subbmit  */}
              <Button
                title="Entrar"
                variant="secondary"
                // onClick={handleClickSignin}
                type="submit"
              />
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
