import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegdialogComponent } from './regdialog/regdialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LandrModule} from './landr/landr.module';

@NgModule({
  declarations: [
    AppComponent,
    RegdialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
