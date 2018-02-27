// Import React
import React from 'react'

// Import Spectacle Core tags
import { Deck } from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

import Intro from './Intro'
import CSSinJS from './CSSinJS'
import StyledComponents from './StyledComponents'
import GettingStarted from './GettingStarted'
import Themes from './Themes'
import Conclusion from './Conclusion'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: '#264653',
    secondary: '#2A9D8F',
    tertiary: '#50FFB1',
    quaternary: '#65AFFF',
    quinary: '#04151F'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {Intro}
        {CSSinJS}
        {StyledComponents}
        {GettingStarted}
        {Themes}
        {Conclusion}
      </Deck>
    )
  }
}
