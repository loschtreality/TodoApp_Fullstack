import React, { PropTypes } from 'react'

class TodoListItem extends React.Component {
  render () {
    let item = this.props.listItem
    return (
      <li>{item.title}</li>
    )
  }
}

export default TodoListItem;
