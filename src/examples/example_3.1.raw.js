// import React from 'react'
// import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  &:hover {
    background: ${props => props.primary ? 'white' : 'palevioletred'};
    color: ${props => props.primary ? 'palevioletred' : 'white'};
  }
`

render(
  <div>
    <Button>Botão Default</Button>
    <Button primary>Botão Primary</Button>
  </div>
)