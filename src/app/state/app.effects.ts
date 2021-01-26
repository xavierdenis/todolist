import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { TodoItemsService } from '../services/todoItems.service';
import { deleteTodoItem, deleteTodoItemSuccess, loadTodoItems, loadTodoItemsSuccess, newTodoItem, newTodoItemSuccess, toggleTodoItem, toggleTodoItemSuccess } from './app.actions';

@Injectable()
export class TodoItemsEffects {

    loadTodoItems$ = createEffect(() => this.actions$.pipe(
        ofType(loadTodoItems),
        exhaustMap(_ => this.todoItemsService.getTodoItems()
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

    newTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(newTodoItem),
        concatMap(action => this.todoItemsService.addTodoItem(action.todoItem)
            .pipe(
                map(id => newTodoItemSuccess({ todoItem: { ...action.todoItem, id } }),
                catchError(() => EMPTY)
            ))
        )
    ));

    deleteTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTodoItem),
        concatMap(action => this.todoItemsService.deleteTodoItem(action.id)
            .pipe(
                map(_ => deleteTodoItemSuccess({ id: action.id }),
                catchError(() => EMPTY)
            ))
        )
    ));

    constructor(private actions$: Actions, private todoItemsService: TodoItemsService) { }
}