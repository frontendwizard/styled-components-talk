import React from 'react'

import {
  Slide,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  Appear,
  Code
} from 'spectacle'
import { Row } from './elements'

export default (
  <div hasSlideChildren>
    <Slide transition={['zoom']}>
      <Heading fit>Estilizando componentes com</Heading>
      <Heading fit caps>
        styled-components
      </Heading>
    </Slide>
    <Slide transition={['fade']}>
      <Heading margin={30}>> whoami_</Heading>
      <Row>
        <div>
          <Image src="./me.png" width={200} />
        </div>
        <div>
          <Heading size={4} textColor="tertiary" textAlign="left">
            Juliano Rafael
          </Heading>
          <Text textAlign="left" textSize={30} textColor="white">
            Lead Front End Developer na Getty/IO
          </Text>
          <Text textAlign="left" textSize={30} textColor="white">
            FreeCodeCamp contributor
          </Text>
          <Text textAlign="left" textSize={30} textColor="white">
            Usuário UNIX desde 2014
          </Text>
          <Text textAlign="left" textSize={30} textColor="white">
            E sim, eu escrevo JS sem{' '}
            <Code textSize={30} textColor="white">
              ;
            </Code>
          </Text>
        </div>
      </Row>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Tópicos</Heading>
      <List ordered>
        <Appear>
          <ListItem>Porque CSS-in-JS?</ListItem>
        </Appear>
        <Appear>
          <ListItem>Porque styled-components?</ListItem>
        </Appear>
        <Appear>
          <ListItem>Como começar a usar styled-components?</ListItem>
        </Appear>
        <Appear>
          <ListItem>O que posso fazer com styled-components?</ListItem>
        </Appear>
      </List>
    </Slide>
  </div>
)
