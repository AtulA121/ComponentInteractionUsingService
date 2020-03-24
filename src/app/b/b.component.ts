import { Component, OnInit } from '@angular/core';
import { InteractService } from '../compInteract/interact.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private _interactComp : InteractService) {}

  ngOnInit(): void {
  }

  sendMessage() {
    this._interactComp.compInteractService();
  }
  
}
