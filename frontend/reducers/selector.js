export const allTodos = state => {
  return Object.keys(state.todos).map( td => {
    return state.todos[td];
  })
}
