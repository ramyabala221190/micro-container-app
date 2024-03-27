import { Component } from '@angular/core';
import { ConfigService, appConfigModel } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private configService:ConfigService){

  }

  environment:string|undefined="";

  ngOnInit(){
    let configurationDetails:appConfigModel|undefined=this.configService.retreiveConfigurationDetails();
    this.environment=configurationDetails?.env;
  }


}
