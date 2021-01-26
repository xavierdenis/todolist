import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { TodoItemFormComponent } from './todo-item-form/todo-item-form.component';
import { TodoItemRoutingComponent } from './todo-item-routing/todo-item-routing.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListRoutingComponent } from './todo-list-routing/todo-list-routing.component';



@NgModule({
  declarations: [TodoItemComponent, TodoListComponent, TodoItemFormComponent, TodoItemRoutingComponent, TodoListRoutingComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [TodoItemComponent, TodoListComponent, TodoItemFormComponent, TodoItemRoutingComponent, TodoListRoutingComponent] 
})
export class ComponentsModule { }
