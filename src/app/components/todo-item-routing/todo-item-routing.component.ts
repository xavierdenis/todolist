import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoItemsService } from 'src/app/services/todoItems.service';
import { TodoItem } from 'src/app/shared/models';

@Component({
  selector: 'app-todo-item-routing',
  templateUrl: './todo-item-routing.component.html',
  styleUrls: ['./todo-item-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemRoutingComponent implements OnInit {

  todoItem$: Observable<TodoItem>;

  constructor(private activatedRoute: ActivatedRoute, private todoItemsService: TodoItemsService) { 
    const id = activatedRoute.snapshot.params['id'];
    this.todoItem$ = todoItemsService.getTodoItem(id);
  }

  ngOnInit(): void {
  }
}
