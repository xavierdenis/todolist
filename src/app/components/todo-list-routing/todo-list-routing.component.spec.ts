import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListRoutingComponent } from './todo-list-routing.component';

describe('TodoListRoutingComponent', () => {
  let component: TodoListRoutingComponent;
  let fixture: ComponentFixture<TodoListRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
