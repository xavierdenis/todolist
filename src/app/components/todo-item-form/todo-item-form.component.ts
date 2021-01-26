import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoItem } from 'src/app/shared/models';

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.scss']
})
export class TodoItemFormComponent implements OnChanges {

  @Input()
  todoItem: TodoItem;

  @Input()
  readonly: boolean;

  form = this.formBuilder.group({
    title: this.formBuilder.control('', Validators.required),
    description: this.formBuilder.control(''),
    done: this.formBuilder.control('')
  });

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    this.form.patchValue(this.todoItem || {});
    if (this.readonly) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
}
