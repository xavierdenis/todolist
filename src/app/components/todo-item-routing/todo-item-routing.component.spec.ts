import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemRoutingComponent } from './todo-item-routing.component';

describe('TodoItemRoutingComponent', () => {
  let component: TodoItemRoutingComponent;
  let fixture: ComponentFixture<TodoItemRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
