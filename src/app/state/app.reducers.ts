import { createReducer, on } from '@ngrx/store';
import { TodoItem } from '../shared/models';
import { retrievedTodoItems, toggleTodoItem as toggleTodoItem } from './app.actions';

export const initialState: ReadonlyArray<TodoItem> = [];

export const todoItemsReducer = createReducer(
  
  initialState,
  
  on(retrievedTodoItems, (state, { todoItems }) => [...todoItems]),
  
  on(toggleTodoItem, (state, { id }) => state.map(tmp => id && id === tmp.id ? { ...tmp, done: !tmp.done } : tmp))
);