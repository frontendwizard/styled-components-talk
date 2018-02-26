import React from 'react'

import {
  Slide,
  Heading
} from 'spectacle'

export default (
  <div hasSlideChildren>
    <Slide transition={['fade']}>
      <Heading caps fit>Porque</Heading>
      <Heading caps fit>styled-components?</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading fit>Remove a necessidade de classes.</Heading>
      <Heading fit>Nada conflitos de nome, regras de nomenclatura, etc.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Não requer praticamente nenhum setup.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Não requer nenhuma sintaxe especial.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Transforma seu CSS em componentes.</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Novamente, transforma seu CSS em componentes.</Heading>
    </Slide>
  </div>
)