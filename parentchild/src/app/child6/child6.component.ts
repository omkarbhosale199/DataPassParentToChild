import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit {
  @Input() getMessage2!:string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.getMessage2);

  }

}
