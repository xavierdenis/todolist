import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItemsService } from 'src/app/services/todoItems.service';
import { TodoItem } from 'src/app/shared/models';
import { retrievedTodoItems, toggleTodoItem as toggleTodoItem } from 'src/app/state/app.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  @Input()
  todoItems: TodoItem[];

  constructor(private store: Store, private todoItemsService: TodoItemsService) {}

  trackByFn(index, item) {
    return item.id;
  }

  onToggle(todoItem: TodoItem) {
    this.store.dispatch(toggleTodoItem({id: todoItem.id}));
    this.todoItemsService.toggleTodoItem(todoItem.id).subscribe(_ => {
      this.todoItemsService.getTodoItems().subscribe(todoItems => {
        this.store.dispatch(retrievedTodoItems({todoItems}));
      });
    });
  }
}
