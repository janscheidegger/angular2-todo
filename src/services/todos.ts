export interface Todo {
    text?: string;
    completed?: boolean;
}

export class TodoService {
    todos: Todo[] = [];
    addTodo(newTodo:Todo) {
        this.todos = this.todos.concat([newTodo]);
    }
}