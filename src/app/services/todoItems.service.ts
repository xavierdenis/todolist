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
    { id: "1", title: "TODO #1" },
    { id: "2", title: "TODO #2" },
    { id: "3", title: "TODO #3" },
    { id: "4", title: "TODO #4", description: "TODO #4 DESC"},
    { id: "5", title: "TODO #5", description: "DONE by angular", done: true },
  ] as TodoItem[];
  
  constructor() { 
    localStorage.setItem(TodoItemsService.LOCAL_STORAGE_TODOS_KEY, JSON.stringify(TodoItemsService.DEMO_DATA)); // Use static data for now
  }

  addTodoItem(todoItem: TodoItem): Observable<string> {
    return defer(() => of(this._addTodoItem(todoItem)));
  }

  toggleTodoItem(id: string): Observable<boolean> {
    return defer(() => of(this._toggleTodoItem(id)));
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

  private _saveTodoItemsFromLocalStorage(todoItems: TodoItem[]) {
    if (todoItems && todoItems.length) {
      localStorage.setItem(TodoItemsService.LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todoItems));
    } else {
      localStorage.removeItem(TodoItemsService.LOCAL_STORAGE_TODOS_KEY);
    }
  }

  private _addTodoItem(todoItem: TodoItem): string {
    if (!todoItem) {
      throw new Error("Specify a valid todoItem");
    }
    todoItem.id = uuidv4();
    const todoItems = this._getTodoItemsFromLocalStorage();
    todoItems.push(todoItem);
    this._saveTodoItemsFromLocalStorage(todoItems);
    return todoItem.id;
  }

  private _toggleTodoItem(id: string): boolean {
    const todoItems = this._getTodoItemsFromLocalStorage();
    let foundId;
    for (let todoItem of todoItems) {
      if (id == todoItem.id) {
        todoItem.done = !todoItem.done;
        foundId = todoItem.id;
        break;
      }
    }
    if (foundId) {
      todoItems.sort((a, b) => a.done && !b.done ? 1 : b.done && !a.done ? -1 : 0);
      this._saveTodoItemsFromLocalStorage(todoItems);
      return foundId;
    } else {
      throw new Error("TodoItem not found: " + id);
    }
  }
}
