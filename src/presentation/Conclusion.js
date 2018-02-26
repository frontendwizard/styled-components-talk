import React from 'react'

import {
  Slide,
  Heading
} from 'spectacle'

export default (
  <div hasSlideChildren>
    <Slide transition={['fade']}>
      <Heading caps fit>Conclusão</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading caps fit>styled-components</Heading>
      <Heading caps fit>facilita muito a criação de componentes de UI</Heading>
      <Heading caps fit>reutilizáveis em nossos apps.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading caps fit>faz parte do standard na Getty/IO</Heading>
      <Heading caps fit>quando se trata de aplicações com</Heading>
      <Heading caps fit>React e React Native.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading caps fit>Obrigado!</Heading>
    </Slide>
  </div>
)