import React from 'react'
import './example_1.css'

const TodoItem = ({ name, due, complete, small }) => (
  <div className={
    `todo-item ${small ? 'todo-item--small' : ''} ${due ? 'is-due' : ''} ${complete ? 'is-complete' : ''}`
  }>
    <span className="todo-item__mark" />
    <span className="todo-item__name">{name}</span>
  </div>
)

export default TodoItem