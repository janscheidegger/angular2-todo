import {Component} from "angular2/core";
import {TodoService, Todo} from "../services/todos";
import {RouteParams} from "angular2/router";
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
    todo: Todo;
    constructor(public todoService:TodoService, public routeParams: RouteParams){
        this.todo = todoService.getTodoById(parseInt(routeParams.get('id')));
    }
}