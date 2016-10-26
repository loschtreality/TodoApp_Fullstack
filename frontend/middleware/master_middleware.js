import TodoMiddleware from './todo_middleware';
import { applyMiddleware } from 'redux';

const masterMiddleware = applyMiddleware(
  TodoMiddleware
)

export default masterMiddleware
