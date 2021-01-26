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
  '[TodoItemsService] Load TodoItems'
);

export const loadTodoItemsSuccess = createAction(
  '[TodoItemsService] Load TodoItems Success',
  props<{ todoItems: TodoItem[] }>()
);

export const newTodoItem = createAction(
  '[TodoItemForm] New TodoItem',
  props<{ todoItem: TodoItem }>()
);

export const newTodoItemSuccess = createAction(
  '[TodoItemForm] New TodoItem Success',
  props<{ todoItem: TodoItem }>()
);