import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

// routable smart components
import {NewTodo, TodoDetail, TodosList} from './routes/index';
import {TodoService} from './services/todos';


@Component({
    selector: 'todo-app',
    template: `
        <h1>Ng2Todos</h1>
        <div>
            <a [routerLink]="['TodoList']">Todos</a>
            <a [routerLink]="['NewTodo']">New Todo</a>
        </div>
        <router-outlet></router-outlet>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, TodoService],
    styles: []
})

@RouteConfig([
    {name: 'TodoList', path: '/todos', component: TodosList, useAsDefault: true},
    {name: 'NewTodo', path: '/new', component: NewTodo},
    {name: 'TodoDetail', path: '/todos/:id', component: TodoDetail}
    // {name: 'LazyComponent', path: 'lazy', loader: System.import('/someComponent')} Lazy Loading
])


export class App {
}