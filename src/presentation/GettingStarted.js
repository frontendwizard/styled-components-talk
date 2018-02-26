import React from 'react'

import {
  Slide,
  Heading,
  Code,
  Text,
  CodePane,
  Appear,
  List,
  ListItem
} from 'spectacle'

import Button from '../examples/example_3'

export default (
  <div hasSlideChildren>
    <Slide transition={['fade']}>
      <Heading caps fit>Como começar a usar</Heading>
      <Heading caps fit>styled-components?</Heading>
      <Heading size={6}>&lt; 💅 &gt;</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Text><Code textSize={30}>npm install --save styled-components</Code></Text>
      <Text><Code textSize={30}>yarn add styled-components</Code></Text>
    </Slide>
    <Slide transition={['fade']}>
      <CodePane
        lang="javascript"
        source={require("../examples/example_3.raw.js")}
      />
    </Slide>
    <Slide transition={['fade']}>
      <Button>Botão</Button>
      <Button primary>Botão primário</Button>
    </Slide>
    <Slide transition={['fade']}>
      <Text fit><Code>styled.button`/* css */`</Code></Text>
      <Heading size={5}>é uma função que retorna um componente de React de vai renderizar um botão na DOM.</Heading>
      <Heading size={5}>O uso da crase no javascript ES6 equivale a invocar a função passando uma string como parâmetro.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>E no React Native?</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <CodePane
        lang="javascript"
        source={require("../examples/example_4.raw.js")}
      />
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Voltando ao to do...</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <CodePane
        lang="javascript"
        source={require("../examples/example_2.raw.js")}
      />
    </Slide>
    <Slide transition={['fade']}>
      <Heading caps fit>Diferenças</Heading>
      <List>
        <Appear><ListItem>Menos código no total (CSS + JS).</ListItem></Appear>
        <Appear><ListItem>Sem classes.</ListItem></Appear>
        <Appear><ListItem>Não há necessidade de importar estilos.</ListItem></Appear>
        <Appear><ListItem>Todos os recursos do CSS estão disponíveis para os estilos.</ListItem></Appear>
        <Appear><ListItem>Todos os recursos do JS estão disponíveis para os estilos.</ListItem></Appear>
        <Appear><ListItem>Funciona aproximadamente da mesma maneira no React Native.</ListItem></Appear>
      </List>
    </Slide>
  </div>
)