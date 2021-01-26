import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadTodoItems } from './state/app.actions';
import { selectTodoItems } from './state/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  
  todoItems$ = this.store.pipe(select(selectTodoItems));

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadTodoItems());
  }
}
