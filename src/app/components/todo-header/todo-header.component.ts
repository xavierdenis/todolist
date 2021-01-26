import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

  @Output()
  add = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent) {
    this.add.emit();
  }
}
