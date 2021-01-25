import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem as TodoItem } from 'src/app/shared/models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

  @Input()
  todoItem: TodoItem;

  @Output()
  toggle = new EventEmitter<TodoItem>();

  onClick(event: MouseEvent) {
    event.stopPropagation(); // Prevent mat-expansion-panel from expanding
    if (this.todoItem) {
      this.toggle.emit(this.todoItem);
    }
  }
}
