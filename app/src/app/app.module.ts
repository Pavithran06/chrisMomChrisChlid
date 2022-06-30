import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChrismomchrischildComponent } from './chrismomchrischild/chrismomchrischild.component';
import { BackComponent } from './back/back.component';
import { ReactiveFormsModule} from '@angular/forms' 

@NgModule({
  declarations: [
    AppComponent,
    ChrismomchrischildComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
