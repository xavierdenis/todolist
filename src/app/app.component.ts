import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoItemsService } from './services/todoItems.service';
import { retrievedTodoItems } from './state/app.actions';
import { selectTodoItems } from './state/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  
  todoItems$ = this.store.pipe(select(selectTodoItems));

  constructor(private store: Store, private todoItemsService: TodoItemsService) { }

  ngOnInit() {
    this.todoItemsService.getTodoItems().subscribe(res => {
      this.store.dispatch(retrievedTodoItems({ todoItems: res }));
    });
  }
}
