import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  private static readonly LOCAL_STORAGE_TODOS_KEY = "todos";

  // private static readonly DEMO_DATA = [
  //   { id: "1", title: "TODO #1" },
  //   { id: "2", title: "TODO #2" },
  //   { id: "3", title: "TODO #3" },
  //   { id: "4", title: "TODO #4", description: "TODO #4 DESC"},
  //   { id: "5", title: "TODO #5", description: "DONE by angular", done: true },
  // ] as TodoItem[];
  
  constructor() {
    // localStorage.setItem(TodoItemsService.LOCAL_STORAGE_TODOS_KEY, JSON.stringify(TodoItemsService.DEMO_DATA)); // Use static data for now
  }

  getTodoItem(id: string): Observable<TodoItem> {
    return defer(() => of(this._getTodoItem(id)));
  }
  
  addTodoItem(todoItem: TodoItem): Observable<string> {
    return defer(() => of(this._addTodoItem(todoItem)));
  }

  deleteTodoItem(id: string): Observable<void> {
    return defer(() => of(this._deleteTodoItem(id)));
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

  private _getTodoItem(id: string): TodoItem {
    const todoItems = this._getTodoItemsFromLocalStorage();
    for (let todoItem of todoItems) {
      if (todoItem.id === id) {
        return todoItem;
      }
    }
    throw new Error("TodoItem not found: " + id);
  }
  
  private _addTodoItem(todoItem: TodoItem): string {
    if (!todoItem) {
      throw new Error("Specify a valid todoItem");
    }
    const todoItems = this._getTodoItemsFromLocalStorage();
    const id = uuidv4();
    todoItems.push({ ...todoItem, id });
    this._saveTodoItemsFromLocalStorage(todoItems);
    return id;
  }

  private _deleteTodoItem(id: string): void {
    const todoItems = this._getTodoItemsFromLocalStorage();
    const newTodoItems = todoItems.filter(todoItem => todoItem.id !== id);
    if (todoItems.length === newTodoItems.length) {
      throw new Error("TodoItem not found: " + id);
    }
    this._saveTodoItemsFromLocalStorage(newTodoItems);
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
