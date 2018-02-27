import React from 'react'

import {
  Slide,
  Heading,
  ComponentPlayground,
  BlockQuote,
  Quote,
  Cite,
  Notes,
  Text
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

import TodoItem from '../examples/example_1'

export default (
  <div hasSlideChildren>
    <Slide transition={['fade']}>
      <Heading fit caps>
        Porque
      </Heading>
      <Heading fit caps>
        CSS-in-JS?
      </Heading>
    </Slide>
    <CodeSlide
      transition={['fade']}
      lang="jsx"
      code={require('../examples/example_1.raw.js')}
      ranges={[
        { loc: [0, 13], title: 'To do Component' },
        { loc: [4, 10] },
        { loc: [5, 6] },
        { loc: [1, 2] }
      ]}
    />
    <CodeSlide
      transition={['fade']}
      lang="css"
      code={require('../examples/example_1.raw.css')}
      ranges={[
        { loc: [0, 8], title: 'CSS' },
        { loc: [0, 3] },
        { loc: [3, 6] },
        { loc: [6, 7] }
      ]}
    />
    <Slide transition={['fade']}>
      <ComponentPlayground
        code={require('../examples/example_9.raw.js')}
        scope={{ TodoItem }}
      />
    </Slide>
    <Slide transition={['fade']}>
      <Heading fit caps>
        Problemas
      </Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>O componente fica separado em duas partes.</Heading>
      <Text fit textColor="white">
        O componente com React e a folha de estilos. Um não funciona
        adequadamente sem o outro.
      </Text>
    </Slide>
    <Slide transition={['fade']}>
      <Heading size={2}>
        Os estilos ficam entrelaçados com o componente tornando a reusabilidade
        do CSS difícil.
      </Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Se não vamos reutilizar o CSS, porque criar classes?</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <BlockQuote>
        <Quote textColor="secondary">
          If you’re writing React, you have access to a more powerful styling
          construct than CSS class names. You have components.
        </Quote>
        <Cite>Michael Chan (learnreact.com)</Cite>
      </BlockQuote>
      <Notes>
        <h1>
          Se você está usando React, você tem acesso a uma ferramenta mais
          poderosa do que classes de CSS. Você tem componentes.
        </h1>
      </Notes>
    </Slide>
  </div>
)
