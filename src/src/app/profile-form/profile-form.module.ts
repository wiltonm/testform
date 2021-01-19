import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';
import { ProfileFormRoutingModule } from './profile-form-routing.module';
import { ProfileFormComponent } from './profile-form.component';



@NgModule({
  declarations: [ProfileFormComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    ProfileFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileFormModule { }
