import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  // @Input() receiveMassage1!: string;
@Input() receiveMassage1 :any;
@Input() receiveMassage2 :any;
@Input() receiveMassage3 :any;
@Input() receiveMassage4 :any; // We get value in recivemassage4 ;use string interpolation we show in parent2 html file.
  constructor() { }

  ngOnInit(): void {

   };

}
