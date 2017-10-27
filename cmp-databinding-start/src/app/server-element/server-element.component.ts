import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type:string, name:string,  content:string};

  constructor() { }

  ngOnInit() {
  }

}