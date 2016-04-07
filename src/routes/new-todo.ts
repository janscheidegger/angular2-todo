import {Component, EventEmitter, Output} from "angular2/core";
import {TodoService, Todo} from "../services/todos";
import {Router} from "angular2/router";

@Component({
    selector: 'new-todo-input',
    template: `
        <div>
            <input type="text" [(ngModel)]="newTodo.text" />
            <button (click)="saveTodo()"> Save</button>
        </div>
    `,
    providers: [],
    directives: []
})
class NewTodoInput {
    newTodo: Todo = {};
    @Output() create:EventEmitter<Todo> = new EventEmitter();

    saveTodo() {
        this.newTodo.completed = false;
        this.create.emit(this.newTodo);
        this.newTodo = {};
    }
}

@Component({
    selector: 'new-todo',
    template: `
        <h1>new Todo</h1>
        <new-todo-input (create)="addTodoToService($event)"></new-todo-input>
        
    `,
    directives: [NewTodoInput],
    providers: [],
    styles: []
})


export class NewTodo {
    constructor(public todoService:TodoService, public router:Router){}
    addTodoToService(newTodo) {
        this.todoService.addTodo(newTodo);
        this.router.navigate(['TodoList']);
    }
}