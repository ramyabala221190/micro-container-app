import { Component } from '@angular/core';
import { ConfigService, appConfigModel } from 'src/app/config.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(private configService:ConfigService){}

  todoAppUrl:string="";

  //todoAppUrl:string="http://localhost:8081/micro-front-end-1.js"; //http-server port

  //todoAppUrl:string="http://localhost:31508/micro-front-end-1.js"; //NodePort 

  ngOnInit(){
    let configurationDetails:appConfigModel|undefined=this.configService.retreiveConfigurationDetails();
    this.todoAppUrl=`http://localhost:${configurationDetails?.remoteAPort}/${configurationDetails?.remoteHostName}.js`;
  }

}
