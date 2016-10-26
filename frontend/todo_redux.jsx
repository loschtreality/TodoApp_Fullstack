import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos } from './util/todo_api_util';
import configureStore from './store/store'
import { requestTodos } from './actions/todo_actions'
import { allTodos } from './reducers/selector'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  const store = configureStore()
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store
  window.requestTodos = requestTodos
  window.todos = allTodos;
});
