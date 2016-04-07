import {Component, Input} from "angular2/core";
import {TodoService, Todo} from "../services/todos";
import {ROUTER_DIRECTIVES} from "angular2/router";

//Dumb Component
@Component({
    selector: 'todo-list',
    template: `
    <ul>
        <li *ngFor="#todo of todos" [class.completed]="todo.completed">
            <input type="checkbox" [(ngModel)]="todo.completed" />
            <a [routerLink]="['TodoDetail', {id: todo.id}]">{{todo.text}}</a>
        </li>
    </ul>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles:[
        `
            .completed {
                text-decoration: line-through;
            }
        `
    ]
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