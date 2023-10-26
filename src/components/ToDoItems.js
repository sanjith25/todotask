import React from 'react'

function ToDoItems(props) {
  return (
    <div>
      <ul>
        <li> {props.text} </li>
      </ul>
    </div>
  )
}

export default ToDoItems;
