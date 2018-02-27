import React from 'react'

import {
  Slide,
  Heading,
  Code,
  Text,
  Appear,
  List,
  ListItem
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

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
    <CodeSlide
      transition={['fade']}
      lang="js"
      code={require("../examples/example_3.raw.js")}
      ranges={[
        {loc: [0, 20], title: 'Botão'},
        {loc: [0, 1]},
        {loc: [2, 3]},
        {loc: [3, 9]},
        {loc: [10, 12]},
        {loc: [13, 17]},
      ]}
    />
    <Slide transition={['fade']}>
      <Button>Botão</Button>
      <Button primary>Botão primário</Button>
    </Slide>
    <CodeSlide
      transition={['fade']}
      lang="jsx"
      code={require("../examples/example_7.raw.js")}
      ranges={[
        {loc: [0, 3], title: 'Estilizando componentes'}
      ]}
    />
    <Slide transition={['fade']}>
      <Heading>E no React Native?</Heading>
    </Slide>
    <CodeSlide
      transition={['fade']}
      lang="jsx"
      code={require("../examples/example_4.raw.js")}
      ranges={[
        {loc: [0, 0], title: 'Botão RN'},
        {loc: [1, 2]},
        {loc: [3, 11]},
        {loc: [12, 16]},
        {loc: [17, 22]},
      ]}
    />
    <Slide transition={['fade']}>
      <Heading>Voltando ao to do...</Heading>
    </Slide>
    <CodeSlide
      transition={['fade']}
      lang="jsx"
      code={require("../examples/example_2.raw.js")}
      ranges={[
        {loc: [0, 0], title: 'Styled To Do'},
        {loc: [1, 2]},
        {loc: [3, 9]},
        {loc: [10, 14]},
        {loc: [15, 21]},
      ]}
    />
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