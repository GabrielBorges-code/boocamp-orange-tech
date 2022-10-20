import React from "react";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { 
  Container, 
  Column,
  Title,
  TitleHighlight
} from "./styles";

export default function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Column>

        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA </TitleHighlight>
          <UserInfo percentual="35" name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
          <UserInfo percentual="50" name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
          <UserInfo percentual="20" name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
          <UserInfo percentual="80" name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
        </Column>


      </Container>
    </>
  );
}

// export { Feed };
