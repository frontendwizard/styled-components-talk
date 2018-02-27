import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  color: #000;
  ${props => props.complete && css`
    color: #aaa;
    text-decoration: line-through;
  `}
  ${props => props.due && css`
    color: #f00;
  `}
  ${props => props.small && css`
    font-size: 80%;
  `}
`

const TodoItem = ({ name, ...props }) => (
  <Wrapper {...props}>
    <span>{props.complete ? '✔' : '*'}</span>
    <span>{name}</span>
  </Wrapper>
)

export default TodoItem