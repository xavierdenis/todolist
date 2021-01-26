import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { loadTodoItems, newTodoItem } from 'src/app/state/app.actions';
import { selectTodoItems } from 'src/app/state/app.selectors';
import { TodoItemDialogComponent } from '../todo-item-dialog/todo-item-dialog.component';

@Component({
  selector: 'app-todo-list-routing',
  templateUrl: './todo-list-routing.component.html',
  styleUrls: ['./todo-list-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListRoutingComponent implements OnInit {

  todoItems$ = this.store.pipe(select(selectTodoItems));

  constructor(private store: Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(loadTodoItems());
  }

  onAdd() {
    const dialogRef = this.dialog.open(TodoItemDialogComponent, null);
    dialogRef.afterClosed().subscribe(todoItem => {
      if (todoItem) {
        this.store.dispatch(newTodoItem({ todoItem }));
      }
    });
  }
}
