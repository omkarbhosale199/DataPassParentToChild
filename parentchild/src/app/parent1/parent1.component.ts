import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
//step 1
  sendDataToChild1 : (any)="XYZ ---->> Data pass to parent to child.";
//   `<br>
//   <p> One whose component is the selector of the other becomes the child</p>
//   <p>जिस component का select refrance हम अगर किसी component को देते हैं ,जिसे देते हैं सिलेक्ट रेफरेंस वह कहलाता है पैरेंट और जो जहां से लेते प सिलेक्ट रेफरेंस उसे कहते हैं हम चाइल्ड</p>
//   <p><strong><i>so here parent1 is parent and child1 is child</i></strong></p>
// </div>

// <div><p><b>IMP-</b></p>
//   <p>हमें data पास करना है चाइल्ड तू पैरेंट OR पैरेंट टू चाइल्ड इस केस में हमें @ इनपुट डेकोरेटर और @ आउटपुट डेकोरेटर हमें चाइल्ड कॉम्पोनेंट में ही मेंशन करना होगा |</p>
//   </div>
// <hr>
// <div>
//   <p>app-child1 [property]->>>> child1Message    ="property"->>>> sendDataToChild1>    /app-child1></p>
//     <div><p>
//       app-child1 [property]->>>> child1Message(child property)    ="property"(parent property)   ->>>> sendDataToChild1>   /app-child1>
//     </p></div>
//   <p>using property binding</p>
// </div>
// <hr>
// <p>on browser console then we get data (ctrl + shift + c ) or implement string interpolation</p>
// <hr>
//   ......................................................................................................
//   //step 1 parent ts file
//   sendDataToChild1 : (any)= "Go and Study Hard And get Job.(Data come from parent1 to child1)"
//   ......................................................................................................
//   //step 2 child ts file
//    @Input() child1Message:any;

//   // Note-
//     // @Input()           child1Message:any;
//   //property Decorator    propertyName :Type

//   // propertyName -- >>> ya madhdhe data yeto ani ha data string interpolation ne html var show karto
//   ......................................................................................................
//   // step 3 child html file
//   app-child1 [child1Message]= "sendDataToChild1"> /app-child1>
//         from [child ts file]= "parent ts file"
//   ......................................................................................................

//   // step 4  child ts file
//   ngOnInit(): void

//   open curly bracket
//     console.log("access in  ngOnInit()",this.child1Message);
//   close curly bracket
//     ......................................................................................................
//step 5  child html file
 // <p>{{ child1Message }}</p>
//   `

  constructor() { }

  ngOnInit(): void {
  }

}
