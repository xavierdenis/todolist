import { createReducer, on } from '@ngrx/store';
import { TodoItem } from '../shared/models';
import { loadTodoItemsSuccess, newTodoItemSuccess, toggleTodoItemSuccess } from './app.actions';

export const initialState: ReadonlyArray<TodoItem> = undefined;

export const todoItemsReducer = createReducer(
  
  initialState,
  
  on(loadTodoItemsSuccess, (state, { todoItems }) => [...todoItems]),
  
  on(toggleTodoItemSuccess, (state, { id }) => state.map(tmp => id && id === tmp.id ? { ...tmp, done: !tmp.done } : tmp)),

  on(newTodoItemSuccess, (state, { todoItem }) => [todoItem, ...state])
);