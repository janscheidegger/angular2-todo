import {Component, Input} from "angular2/core";
import {TodoService, Todo} from "../services/todos";

//Dumb Component
@Component({
    selector: 'todo-list',
    template: `
    <ul>
        <li *ngFor="#todo of todos">{{todo.text}}</li>
    </ul>
    `
})
class TodoList{
    @Input() todos: Todo[];
}

// SmartComponent
@Component({
    selector: 'todos-list',
    template: `
        <h1>Todos List</h1>
        <todo-list [todos]="todoService.todos"></todo-list>
        `,
    directives: [TodoList],
    providers: [],
    styles: []
})

export class TodosList {
    constructor(public todoService: TodoService){}
}