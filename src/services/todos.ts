export interface Todo {
    id?: number;
    text?: string;
    completed?: boolean;
}

let todoId = 1;

export class TodoService {
    todos: Todo[] = [];
    addTodo(newTodo:Todo) {
        newTodo.id = todoId++;
        this.todos = this.todos.concat([newTodo]);
    }
    getTodoById(id:number) {
        return this.todos.find(todo => todo.id === id);
    }
}