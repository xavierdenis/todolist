import { createSelector } from "@ngrx/store";
import { TodoItem } from "../shared/models";
import { AppState } from "./app.state";

export const selectTodoItems = createSelector(
    (state: AppState) => state.todoItems,
    (todoItems: Array<TodoItem>) => todoItems
);