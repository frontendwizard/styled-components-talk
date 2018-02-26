import React from 'react'
import { ThemeProvider } from 'styled-components'
import Button from './example_5'

export default () => (
  <div>
    <Button>Default Button</Button>
    <ThemeProvider theme={{ main: 'royalblue' }}>
      <Button>Themed</Button>
    </ThemeProvider>      
  </div>
)