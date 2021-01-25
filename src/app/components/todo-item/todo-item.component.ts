import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
}
