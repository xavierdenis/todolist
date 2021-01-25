import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../shared/models';
     
export const toggleTodoItem = createAction(
  '[Todo Item] Toggle',
  props<{ id: string }>()
);

export const retrievedTodoItems = createAction(
  '[Todo Items Service] Retrieved Todo Items Success',
  props<{ todoItems: TodoItem[] }>()
);