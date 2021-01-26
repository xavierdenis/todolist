import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { TodoItemsService } from '../services/todoItems.service';
import { loadTodoItems, loadTodoItemsSuccess, toggleTodoItem, toggleTodoItemSuccess } from './app.actions';

@Injectable()
export class TodoItemsEffects {

    loadTodoItems$ = createEffect(() => this.actions$.pipe(
        ofType(loadTodoItems),
        mergeMap(() => this.todoItemsService.getTodoItems()
            .pipe(
                map(todoItems => loadTodoItemsSuccess({ todoItems }),
                catchError(() => EMPTY)
            ))
        )
    ));

    toggleTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(toggleTodoItem),
        exhaustMap(action => this.todoItemsService.toggleTodoItem(action.id)
            .pipe(
                map(done => toggleTodoItemSuccess({ id: action.id, done }),
                catchError(() => EMPTY)
            ))
        )
    ));

    toggleTodoItemSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(toggleTodoItemSuccess),
        mergeMap(() => of(loadTodoItems()))
    ));

    constructor(private actions$: Actions, private todoItemsService: TodoItemsService) { }
}