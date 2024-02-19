import { Component, ElementRef, ViewChild } from '@angular/core';
import { EventTrackDirective, getProvider } from 'click-tracker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[getProvider(AppComponent)]

})
export class AppComponent {
  title = 'container-app';

  constructor(private hostSelector:ElementRef){
  }

  @ViewChild('e1',{static:false})e1:EventTrackDirective | undefined;

  logPayload(payload:any){
    console.log(payload)
  }

  trackMouseOver(event:any){
     this.e1?.trackEvent(event);
  }
}

