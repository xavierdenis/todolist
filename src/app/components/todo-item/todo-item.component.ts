import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem as TodoItem } from 'src/app/shared/models';
import { toggleTodoItem } from 'src/app/state/app.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

  @Input()
  todoItem: TodoItem;

  @Input()
  readonly: boolean;

  @Output()
  submit = new EventEmitter<TodoItem>();

  constructor(private store: Store) { }

  onClick(event: MouseEvent) {
    event.stopPropagation(); // Prevent mat-expansion-panel from expanding
    if (this.todoItem) {
      this.store.dispatch(toggleTodoItem({ id: this.todoItem.id }));
    }
  }

  onSubmit(event: TodoItem) {
    console.log("onSubmit", event);
    this.submit.emit(event);
  }
}
