import { TodoItem } from "../shared/models";

export interface AppState {
    todoItems: ReadonlyArray<TodoItem>;
}