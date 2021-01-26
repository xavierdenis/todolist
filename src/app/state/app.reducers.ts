import { createReducer, on } from '@ngrx/store';
import { TodoItem } from '../shared/models';
import { deleteTodoItemSuccess, loadTodoItemsSuccess, newTodoItemSuccess, toggleTodoItemSuccess } from './app.actions';

export const initialState: ReadonlyArray<TodoItem> = undefined;

export const todoItemsReducer = createReducer(
  
  initialState,
  
  on(loadTodoItemsSuccess, (state, { todoItems }) => [...todoItems]),
  
  on(toggleTodoItemSuccess, (state, { id }) => state
    .map(tmp => id && id === tmp.id ? { ...tmp, done: !tmp.done } : tmp)
    .sort((a, b) => a.done && !b.done ? 1 : !a.done && b.done ? -1 : 0)
  ),

  on(newTodoItemSuccess, (state, { todoItem }) => [todoItem, ...state]),

  on(deleteTodoItemSuccess, (state, { id }) => state.slice(0).filter(todoItem => todoItem.id !== id))
);