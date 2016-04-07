export interface Todo {
    id?: number;
    text?: string;
    completed?: boolean;
}

let todoId = 1;

export class TodoService {
    todos: Todo[] = [];
    constructor() {
        fetch('todos.json').then(res => res.json()).then(todos => {
            this.todos = todos;
        });
    }
    addTodo(newTodo:Todo) {
        newTodo.id = todoId++;
        this.todos = this.todos.concat([newTodo]);
    }
    getTodoById(id:number) {
        return this.todos.find(todo => todo.id === id);
    }
}