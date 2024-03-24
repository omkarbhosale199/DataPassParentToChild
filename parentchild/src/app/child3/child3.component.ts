import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
@Input() reciveMassage:any
 //        name       : type
  constructor() { }

  ngOnInit(): void {
  }

}
