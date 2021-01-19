import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';
import { TermsDialogComponent } from './terms-dialog.component';



@NgModule({
  declarations: [TermsDialogComponent],
  exports: [
    TermsDialogComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule
  ]
})
export class TermsDialogModule { }
