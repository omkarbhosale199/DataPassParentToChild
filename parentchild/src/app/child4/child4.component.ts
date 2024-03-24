import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  @Input() reciveMassage!: number;

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.reciveMassage);

  }

}
