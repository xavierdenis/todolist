import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoItem } from 'src/app/shared/models';

@Component({
  selector: 'app-todo-item-dialog',
  templateUrl: './todo-item-dialog.component.html',
  styleUrls: ['./todo-item-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public todoItem: TodoItem) { }

  ngOnInit(): void {
  }
}
