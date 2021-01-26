import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../shared/models';
     
export const toggleTodoItem = createAction(
  '[TodoItemList] Toggle TodoItem Done',
  props<{ id: string }>()
);

export const toggleTodoItemSuccess = createAction(
  '[TodoItemList] Toggle TodoItem Done Success',
  props<{ id: string, done: boolean }>()
);

export const loadTodoItems = createAction(
  '[TodoItemsService] Load Todo Items'
);

export const loadTodoItemsSuccess = createAction(
  '[TodoItemsService] Load Todo Items Success',
  props<{ todoItems: TodoItem[] }>()
);