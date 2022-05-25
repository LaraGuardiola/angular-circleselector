import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircleSelectorComponent } from './circle-selector/circle-selector.component';
import { CirclesDirective } from './circle-selector/circles.directive';
import { NavigationLineComponent } from './navigation-line/navigation-line.component';
import { NavigationLineDirective } from './navigation-line/navigation-line.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextBoxComponent } from './text-box/text-box.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { IconButtonComponent } from './icon-button/icon-button.component';


@NgModule({
  declarations: [
    AppComponent,
    CircleSelectorComponent,
    CirclesDirective,
    NavigationLineComponent,
    NavigationLineDirective,
    TextBoxComponent,
    ListBoxComponent,
    IconButtonComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
