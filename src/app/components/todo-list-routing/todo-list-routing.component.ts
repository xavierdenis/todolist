import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadTodoItems } from 'src/app/state/app.actions';
import { selectTodoItems } from 'src/app/state/app.selectors';

@Component({
  selector: 'app-todo-list-routing',
  templateUrl: './todo-list-routing.component.html',
  styleUrls: ['./todo-list-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListRoutingComponent implements OnInit {

  todoItems$ = this.store.pipe(select(selectTodoItems));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadTodoItems());
  }
}
