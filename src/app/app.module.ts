import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircleSelectorComponent } from './circle-selector/circle-selector.component';
import { CirclesDirective } from './circle-selector/circles.directive';

@NgModule({
  declarations: [
    AppComponent,
    CircleSelectorComponent,
    CirclesDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
