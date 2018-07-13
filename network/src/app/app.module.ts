import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

///Manually added 
import {FormsModule} from '@angular/forms'; //NgModule goes live

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // adds FormModule to NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
