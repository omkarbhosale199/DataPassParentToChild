import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {
  //2
  @Input() getMassage!: number;

  constructor() { }
  
// 4
  ngOnInit(): void {
    console.log(this.getMassage);

  }

}
