import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [TodoItemComponent, TodoListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [TodoItemComponent, TodoListComponent] 
})
export class ComponentsModule { }
