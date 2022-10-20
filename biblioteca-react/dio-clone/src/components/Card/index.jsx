import React from "react";

import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://www.alura.com.br/artigos/assets/qual-e-a-melhor-linguagem-de-programacao/qual-e-a-melhor-linguagem-de-programacao.png"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/63865025?v=4" />
          <div>
            <h4>Gabriel Borges</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para o curso de React</h4>
          <p>
            Projeto feito no curso React no bootcamp Inter.{" "}
            <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#React #JavaScript #StyledComponent</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
