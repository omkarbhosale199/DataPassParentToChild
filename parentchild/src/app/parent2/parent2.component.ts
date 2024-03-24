import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

sendDataToChild21="First massage from parent2";
sendDataToChild22="second massage from parent2 to child2 ";
sendDataToChild23="third massage from parent2 to child2";
//strInterpolation for show data on browser
sendDataToChild24="fourth massage from parent2 to child2"
  constructor() { }

  ngOnInit(): void {
    console.log(`sendDataToChild21---->>>${this.sendDataToChild21}
                 sendDataToChild22---->>>${this.sendDataToChild22}
                 sendDataToChild23---->>>${this.sendDataToChild23}
                 sendDataToChild24---->>>${this.sendDataToChild24}`);

  }

}
