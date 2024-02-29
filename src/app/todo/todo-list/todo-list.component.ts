import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  //todoAppUrl:string="http://localhost:8080/micro-front-end-1.js"; //http-server port

  todoAppUrl:string="http://localhost:31508/micro-front-end-1.js"; //NodePort 

}
