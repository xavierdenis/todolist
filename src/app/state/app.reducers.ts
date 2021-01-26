import { createReducer, on } from '@ngrx/store';
import { TodoItem } from '../shared/models';
import { loadTodoItemsSuccess, toggleTodoItem as toggleTodoItem, toggleTodoItemSuccess } from './app.actions';

export const initialState: ReadonlyArray<TodoItem> = [];

export const todoItemsReducer = createReducer(
  
  initialState,
  
  on(loadTodoItemsSuccess, (state, { todoItems }) => [...todoItems]),
  
  on(toggleTodoItemSuccess, (state, { id }) => state.map(tmp => id && id === tmp.id ? { ...tmp, done: !tmp.done } : tmp))
);