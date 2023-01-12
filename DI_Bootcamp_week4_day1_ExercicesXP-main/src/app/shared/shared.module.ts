import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { Boutton2Component } from './boutton2/boutton2.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ButtonComponent,
    Boutton2Component,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ButtonComponent,
    Boutton2Component,
    ListComponent,
  ],
})
export class SharedModule { }

