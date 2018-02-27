import React from 'react'

import {
  Slide,
  Heading,
  Link
} from 'spectacle'

export default (
  <div hasSlideChildren>
    <Slide transition={['fade']}>
      <Heading caps fit>Conclusão</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading caps fit>styled-components</Heading>
      <Heading caps fit>facilita muito a criação de componentes de UI</Heading>
      <Heading caps fit>reutilizáveis em apps.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading caps fit>faz parte do standard na Getty/IO</Heading>
      <Heading caps fit>quando se trata de aplicações com</Heading>
      <Heading caps fit>React e React Native.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading caps fit>Obrigado!</Heading>
      <Heading size={6} fit><Link textColor="secondary" href="https://github.com/julianorafael/styled-components-talk" target="blank">https://github.com/julianorafael/styled-components-talk</Link></Heading>
      <Heading size={6}><Link textColor="secondary" href="https://github.com/julianorafael" target="blank">github</Link></Heading>
      <Heading size={6}><Link textColor="secondary" href="https://twitter.com/julianorsfarias" target="blank">twitter</Link></Heading>
      <Heading size={6}><Link textColor="secondary" href="https://linkedin.com/in/julianorafael/" target="blank">linkedin</Link></Heading>
      <Heading size={6}><Link textColor="secondary" href="https://devparana.slack.com/" target="blank">@julianorafael</Link></Heading>
    </Slide>
  </div>
)