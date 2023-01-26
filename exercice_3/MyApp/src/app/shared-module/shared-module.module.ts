import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentComponent } from './list-component/list-component.component';



@NgModule({
  declarations: [
    ListComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListComponentComponent
  ]
})
export class SharedModuleModule { }
