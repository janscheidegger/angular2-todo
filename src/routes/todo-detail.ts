import {Component} from "angular2/core";
import {TodoService} from "../services/todos";
@Component({
    selector: 'todo-detail',
    template: `
        <h1>Todo Detail</h1>
        `,
    directives: [],
    providers: [],
    styles: []
})

export class TodoDetail {
    constructor(public todoService:TodoService){}
}