import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Parent4Component } from './parent4/parent4.component';
import { Child5Component } from './child5/child5.component';
import { Parent5Component } from './parent5/parent5.component';
import { Parent6Component } from './parent6/parent6.component';
import { Child6Component } from './child6/child6.component';
import { Child7Component } from './child7/child7.component';
import { Parent7Component } from './parent7/parent7.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component,
    Child4Component,
    Parent4Component,
    Child5Component,
    Parent5Component,
    Parent6Component,
    Child6Component,
    Child7Component,
    Parent7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
