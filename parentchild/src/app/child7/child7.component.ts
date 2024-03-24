import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.css']
})
export class Child7Component implements OnInit {
  @Input()
  getData!: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.getData);

  }

}
