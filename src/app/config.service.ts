import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface appConfigModel{
  env:string,
  remoteAPort:number,
  remoteHostName:string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) { }

  private appConfiguration:appConfigModel | undefined;

  setConfigurationDetails(){
    return this.http.get('assets/configurations/config.json').pipe(
      tap((response:any)=>{
        console.log(response);
        this.appConfiguration=response;
      })
    )
  }

  retreiveConfigurationDetails(){
    return this.appConfiguration;
  }
}
