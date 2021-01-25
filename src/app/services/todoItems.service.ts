import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TodoItem } from '../shared/models';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  private static readonly LOCAL_STORAGE_TODOS_KEY = "todos";

  private static readonly DEMO_DATA = [
    { title: "TODO #1" },
    { title: "TODO #2" },
    { title: "TODO #3" },
    { title: "TODO #4", description: "TODO #4 DESC"},
    { title: "TODO #5", description: "DONE by angular", checked: true },
  ] as TodoItem[];
  
  constructor() { 
    localStorage.setItem(TodoItemsService.LOCAL_STORAGE_TODOS_KEY, JSON.stringify(TodoItemsService.DEMO_DATA)); // Use static data for now
  }

  addTodoItem(todoItem: TodoItem): Observable<string> {
    return defer(() => this._addTodoItem(todoItem));
  }
  
  getTodoItems(): Observable<TodoItem[]> {
    return of(this._getTodoItemsFromLocalStorage()).pipe(
      delay(1000)
    );
  }

  private _getTodoItemsFromLocalStorage(): TodoItem[] {
    const storage = localStorage.getItem(TodoItemsService.LOCAL_STORAGE_TODOS_KEY);
    if (!storage) {
      return [];
    } else {
      return JSON.parse(storage);
    }
  }

  private _addTodoItem(todoItem: TodoItem): string {
    if (!todoItem) {
      throw new Error("Specify a valid todoItem");
    }

    todoItem.id = uuidv4();
    const list = this._getTodoItemsFromLocalStorage().push(todoItem);
    return todoItem.id;
  }
}
