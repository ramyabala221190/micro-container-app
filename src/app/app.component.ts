import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'container-app';

  constructor(private http:HttpClient){
  }
ngOnInit(){}
}

