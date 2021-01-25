import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItemsService } from './services/todoItems.service';
import { TodoItem } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  
  todoItems$: Observable<TodoItem[]>;

  constructor(private todoItemsService: TodoItemsService) {
    this.todoItems$ = todoItemsService.getTodoItems();
  }
}
