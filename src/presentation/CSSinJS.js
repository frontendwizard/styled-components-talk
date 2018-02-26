import React from 'react'

import {
  Slide,
  Heading,
  Image,
  Appear,
  CodePane,
  Code,
  BlockQuote,
  Quote,
  Cite,
  Notes,
  Text
} from 'spectacle'
import { Row } from './elements'

import TodoItem from '../examples/example_1'

export default (
  <div hasSlideChildren>
    <Slide transition={['fade']}>
      <Heading fit caps>Porque</Heading>
      <Heading fit caps>CSS-in-JS?</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <CodePane
        lang="javascript"
        source={require("../examples/example_1.raw.js")}
      />
    </Slide>
    <Slide transition={['fade']}>
      <CodePane
        lang="css"
        source={require("../examples/example_1.raw.css")}
      />
    </Slide>
    <Slide transition={['fade']}>
      <Heading size={6} margin={40}>Que resulta em:</Heading>
      <Appear>
        <Row justify="space-between" align="center" margin="0 0 10px 0">
          <Code margin="0" textSize={20}>{`<TodoItem name="item" />`}</Code>
          <TodoItem name="item" />
        </Row>
      </Appear>
      <Appear>
        <Row justify="space-between" align="center" margin="0 0 10px 0">
          <Code margin="0" textSize={20}>{`<TodoItem name="item" complete />`}</Code>
          <TodoItem name="item" complete />
        </Row>
      </Appear>
      <Appear>
        <Row justify="space-between" align="center" margin="0 0 10px 0">
          <Code margin="0" textSize={20}>{`<TodoItem name="item" due />`}</Code>
          <TodoItem name="item" due />
        </Row>
      </Appear>
      <Appear>
        <Row justify="space-between" align="center" margin="0 0 10px 0">
          <Code margin="0" textSize={20}>{`<TodoItem name="item" small />`}</Code>
          <TodoItem name="item" small />
        </Row>
      </Appear>
    </Slide>
    <Slide transition={['fade']}>
      <Heading size={2} margin={40}>Pain points</Heading>
      <Image src={require("../assets/code_2.png")} />
      <Image src={require("../assets/code_1.png")} />
    </Slide>
    <Slide transition={['fade']}>
      <Heading>O componente fica separado em duas partes.</Heading>
      <Text fit>O componente com React e a folha de estilos. Um não funciona adequadamente sem o outro.</Text>
    </Slide>
    <Slide transition={['fade']}>
      <Heading size={2}>Os estilos ficam entrelaçados com o componente tornando a reusabilidade do CSS difícil.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Se não vamos reutilizar o CSS, porque criar classes?</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>React Native</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <BlockQuote>
        <Quote textColor="secondary">If you’re writing React, you have access to a more powerful styling construct than CSS class names. You have components.</Quote>
        <Cite>Michael Chan (learnreact.com)</Cite>
      </BlockQuote>
      <Notes>
        <h1>Se você está usando React, você tem acesso a uma ferramenta mais poderosa do que classes de CSS. Você tem componentes.</h1>
      </Notes>
    </Slide>
  </div>
)