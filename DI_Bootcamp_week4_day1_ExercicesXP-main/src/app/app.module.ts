import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiJsonService } from './api-json.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers :[ApiJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
