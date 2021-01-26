import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemRoutingComponent } from './components/todo-item-routing/todo-item-routing.component';
import { TodoListRoutingComponent } from './components/todo-list-routing/todo-list-routing.component';

const routes: Routes = [
  { path: ':id', component: TodoItemRoutingComponent },
  { path: '**', component: TodoListRoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
