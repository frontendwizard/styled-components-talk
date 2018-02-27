// import React from 'react'
// import styled, { css } from 'styled-components'

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

render(
  <div>
    <TodoItem name="item" />
    <TodoItem name="item" complete />
    <TodoItem name="item" due />
    <TodoItem name="item" small />
    <TodoItem name="item" small complete />
    <TodoItem name="item" small due />
  </div>
)