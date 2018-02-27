import React from 'react'
import styled, { ThemeProvider, css } from 'styled-components'

import {
  Slide,
  Heading,
  ComponentPlayground
} from 'spectacle'

export default (
  <div hasSlideChildren>
    <Slide transition={['fade']}>
      <Heading caps fit>O que mais podemos fazer com</Heading>
      <Heading caps fit>styled-components?</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading caps fit>Temas</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <ComponentPlayground
        code={require("../examples/example_6.raw.js")}
        scope={{ styled, ThemeProvider }}
      />
    </Slide>
    <Slide transition={['fade']}>
      <Heading caps fit>Extend</Heading>
    </Slide>
    <Slide transition={['fade']}>
      <ComponentPlayground
        code={require("../examples/example_8.raw.js")}
        scope={{ styled, css }}
      />
    </Slide>
  </div>
)