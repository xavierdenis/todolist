import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { TodoItemsService } from '../services/todoItems.service';
import { loadTodoItems, loadTodoItemsSuccess, newTodoItem, newTodoItemSuccess, toggleTodoItem, toggleTodoItemSuccess } from './app.actions';

@Injectable()
export class TodoItemsEffects {

    loadTodoItems$ = createEffect(() => this.actions$.pipe(
        ofType(loadTodoItems),
        mergeMap(_ => this.todoItemsService.getTodoItems()
            .pipe(
                map(todoItems => loadTodoItemsSuccess({ todoItems }),
                catchError(() => EMPTY)
            ))
        )
    ));

    toggleTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(toggleTodoItem),
        mergeMap(action => this.todoItemsService.toggleTodoItem(action.id)
            .pipe(
                map(done => toggleTodoItemSuccess({ id: action.id, done }),
                catchError(() => EMPTY)
            ))
        )
    ));

    toggleTodoItemSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(toggleTodoItemSuccess),
        mergeMap(_ => of(loadTodoItems()))
    ));

    newTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(newTodoItem),
        mergeMap(action => this.todoItemsService.addTodoItem(action.todoItem)
            .pipe(
                map(id => newTodoItemSuccess({ todoItem: { ...action.todoItem, id } }),
                catchError(() => EMPTY)
            ))
        )
    ));


    constructor(private actions$: Actions, private todoItemsService: TodoItemsService) { }
}