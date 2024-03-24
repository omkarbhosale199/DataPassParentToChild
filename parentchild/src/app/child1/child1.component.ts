import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  //step 2
  @Input() child1Message:any;
//note-
  // @Input()          child1Message:any;
//property Decorator    propertyName :Type
// propertyName -->>> ya madhdhe data yeto ani ha data string interpolation ne html var show karto

  constructor() { }
// step 4
  ngOnInit(): void {
    console.log("access in  ngOnInit()",this.child1Message);

  }

}
