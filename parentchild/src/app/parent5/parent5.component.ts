import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component implements OnInit {
  // 1
massage:number=45;
  constructor() { }

  ngOnInit(): void {
  }

}
