import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemDialogComponent } from './todo-item-dialog/todo-item-dialog.component';
import { TodoItemFormComponent } from './todo-item-form/todo-item-form.component';
import { TodoItemRoutingComponent } from './todo-item-routing/todo-item-routing.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListRoutingComponent } from './todo-list-routing/todo-list-routing.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoItemComponent, TodoListComponent, TodoItemFormComponent, TodoItemRoutingComponent, TodoListRoutingComponent, TodoHeaderComponent, TodoItemDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule
  ],
  exports: [TodoItemComponent, TodoListComponent, TodoItemFormComponent,
    TodoItemRoutingComponent, TodoListRoutingComponent,
    TodoHeaderComponent, TodoItemDialogComponent
  ],
  entryComponents: [TodoItemDialogComponent]
})
export class ComponentsModule { }
