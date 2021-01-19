import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoMaterialModule } from '../material-module';
import { TermsDialogModule } from '../terms-dialog/terms-dialog.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    DemoMaterialModule,
    CommonModule,
    HomeRoutingModule,
    TermsDialogModule
  ]
})
export class HomeModule { }
