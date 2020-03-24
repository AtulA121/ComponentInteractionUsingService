import { Component, OnInit } from '@angular/core';
import { InteractService } from '../compInteract/interact.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  url : string="http://localhost:3000/getData";
  tableData : any;

  constructor(private _interactComp : InteractService) {
    this.subscribeComp();
  }

  ngOnInit(): void {
    this.getLocalData();
  }

  
  subscribeComp(){
    this._interactComp.compInteract$.subscribe(res=>{
      this.getData();
    });
  }

  getData(){
    this._interactComp.getHttpData(this.url).subscribe((res : any)=>{
      this.tableData=res.data;
    });
  }

  getLocalData(){
    this.tableData=this._interactComp.getLocalData();
  }

}
