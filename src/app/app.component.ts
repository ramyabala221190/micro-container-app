import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild,HostListener } from '@angular/core';
import { EventTrackDirective, getProvider } from 'click-tracker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[getProvider(AppComponent)]

})
export class AppComponent {
  title = 'container-app';

  constructor(private http:HttpClient){
  }
ngOnInit(){}
}

