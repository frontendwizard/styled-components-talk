import React from 'react'
import { ThemeProvider } from 'styled-components'

import {
  Slide,
  Heading,
  CodePane
} from 'spectacle'
import Button from '../examples/example_5'

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
      <CodePane
        lang="javascript"
        source={require("../examples/example_6.raw.js")}
      />
      <div>
        <Button>Default Button</Button>
        <ThemeProvider theme={{ main: 'royalblue' }}>
          <Button>Themed</Button>
        </ThemeProvider>      
      </div>
    </Slide>
    <Slide transition={['fade']}>
      <CodePane
        lang="javascript"
        source={require("../examples/example_5.raw.js")}
      />
    </Slide>
  </div>
)