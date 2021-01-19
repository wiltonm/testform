import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoneRoutingModule } from './done-routing.module';
import { DoneComponent } from './done.component';


@NgModule({
  declarations: [DoneComponent],
  imports: [
    CommonModule,
    DoneRoutingModule
  ]
})
export class DoneModule { }
