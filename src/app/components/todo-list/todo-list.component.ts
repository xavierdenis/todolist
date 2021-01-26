import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from 'src/app/shared/models';
import { toggleTodoItem as toggleTodoItem } from 'src/app/state/app.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  @Input()
  todoItems: TodoItem[];

  constructor(private store: Store) { }

  trackByFn(index, item) {
    return item.id;
  }

  onToggle(todoItem: TodoItem) {
    this.store.dispatch(toggleTodoItem({ id: todoItem.id }));
  }
}
