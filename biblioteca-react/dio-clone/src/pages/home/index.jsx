import React from "react";

import { useNavigate } from "react-router-dom";

import BannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";

import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighlight } from "./styles";

export default function Home() {

  const navigate = useNavigate();

  const handleClickSignin = () => {
    navigate("/login")
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={(handleClickSignin)}
          />
        </div>
        <div>
          <img src={BannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
}

// export { Home };
