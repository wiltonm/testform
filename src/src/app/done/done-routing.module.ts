import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoneComponent } from './done.component';

const routes: Routes = [{ path: '', component: DoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoneRoutingModule { }
