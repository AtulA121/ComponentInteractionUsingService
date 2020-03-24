import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteractService {

  private compInteract = new Subject<string>();
  compInteract$ = this.compInteract.asObservable();

  constructor(private _http : HttpClient) {
  }

  compInteractService() {
    this.compInteract.next();
  }  

  getHttpData(url){
    return this._http.get(url);
  }

  getLocalData(){
    return [
      {
        "name": "football",
        "description": "lionel messi",
        "date": "1/12/1996"
      },
      {
        "name": "cricket",
        "description": "atul pisal",
        "date": "2/20/2020"
      },
      {
        "name": "golf",
        "description": "leonel messi",
        "date": "11/4/2010"
      },
      {
        "name": "kabadi",
        "description": "pradeep narwal",
        "date": "6/7/2020"
      },
      {
        "name": "sprint",
        "description": "usian bolt",
        "date": "3/8/2012"
      },
      {
        "name": "hollyball",
        "description": "vitthal aradwad",
        "date": "9/12/1990"
      }
    ];
  }

}
