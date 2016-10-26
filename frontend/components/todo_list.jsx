import React from 'react'
import TodoListItem from './todo_list_item'

class TodoList extends React.Component {

  componentDidMount() {
    this.props.requestTodos()
  }

  render () {
    let {todos} = this.props
    return (
      <ul>
        {
          todos.map( todoLI => {
            return <TodoListItem key={todoLI.id} listItem={todoLI}/>
          })
        }
      </ul>
    )
  }
}

export default TodoList;
