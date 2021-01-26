import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from 'src/app/shared/models';

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.scss']
})
export class TodoItemFormComponent implements OnInit {

  @Input()
  todoItem: TodoItem;

  @Input()
  readonly: boolean;

  @Output()
  submit = new EventEmitter<TodoItem>();
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(this.todoItem?.title, Validators.required),
      description: this.formBuilder.control(this.todoItem?.description),
      done: this.formBuilder.control(this.todoItem?.done)
    });
    if (this.readonly) {
      this.form.disable();
    }
  }

  onSubmit(): void {
    console.log("onSubmit", this.form.value);
    this.submit.emit(this.form.value);
  }
}
