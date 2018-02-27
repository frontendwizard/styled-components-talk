// import React from 'react'
// import styled from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};

  ${props => props.block && css`
    background-color: ${props => props.theme.main};
    color: #FFF;
  `}
`

Button.defaultProps = {
  theme: {
    main: 'darkorange'
  }
}

const BigButton = Button.extend`
  font-size: 150%;
`

render(
  <div>
    <Button>Default Button</Button>
    <Button block>Block Button</Button>
    <BigButton>Default BigButton</BigButton>
    <BigButton block>Block BigButton</BigButton>
  </div>
)